import { useDispatch, useSelector } from "react-redux";
import { Lucid } from "lucid-cardano";
import { AppState } from "@/reducers/index";
import { useCallback } from "react";

import * as AccountActions from "@/actions/account.action";

export function useWalletConnect(): [Object, (wallet: Object) => void] {
  const dispatch = useDispatch();

  const connectWallet = useCallback(async (item: any) => {
    const connector = item.getConnector();
    console.log("connectWallet: ", item);
    console.log("connector: ", connector);
    if (!connector) {
      return window.open(item.extensionLink);
    }
    const api = await connector.enable();
    const networkId = await api.getNetworkId();

    const lucid = await Lucid.new();
    lucid.selectWallet(api);

    const address = await lucid.wallet.address();

    dispatch(
      AccountActions.connectWallet({
        wallet: {
          address,
          provider: item.name,
          networkId: networkId,
        },
      })
    );
  }, []);

  return [connectWallet];
}

export function useWalletDisconnect(): [Object, (wallet: Object) => void] {
  const dispatch = useDispatch();

  const disconnectWallet = useCallback(() => {
    dispatch(AccountActions.disconnectWallet());
  }, []);

  return [disconnectWallet];
}
