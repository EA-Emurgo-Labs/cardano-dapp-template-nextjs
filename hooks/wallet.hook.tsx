import { useDispatch, useSelector } from "react-redux";
import { Lucid } from "lucid-cardano";
import { AppState } from "@/reducers/index";
import { useCallback } from "react";

import * as AccountActions from "@/actions/account.action";

export function useWalletConnect(): [Object, (wallet: Object) => void] {
  const dispatch = useDispatch();
  const wallet = useSelector<AppState, AppState["account"]["wallet"]>(
    (state) => state.account.wallet
  );

  const connectWallet = useCallback(async (item: any) => {
    const connector = item.getConnector();
    console.log("connectWallet: ", item);
    if (!connector) {
      return window.open(item.extensionLink);
    }
    const api = await connector.enable();
    const lucid = await Lucid.new();
    lucid.selectWallet(api);

    console.log("network: ", await api.getNetworkId());
    const address = await lucid.wallet.address();

    dispatch(
      AccountActions.updateWallet({
        wallet: {
          address,
          selected: item,
        },
      })
    );
  }, []);

  return [wallet, connectWallet];
}
