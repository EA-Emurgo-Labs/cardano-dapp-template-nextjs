import { useDispatch, useSelector } from "react-redux";
import { Lucid } from "lucid-cardano";
import { AppState } from "@/reducers/index";
import { useCallback } from "react";
import { Wallets } from "@/wallets/index.wallet";

import * as AccountActions from "@/actions/account.action";

export function useWalletConnect(): [(wallet: Object) => void] {
  const dispatch = useDispatch();

  const connectWallet = useCallback(async (item: any) => {
    const wallet = new Wallets[item.id]();
    if (!wallet.provider) {
      return window.open(item.extensionLink);
    }
    const api = await wallet.enable();
    const networkId = await wallet.getNetworkId();

    const lucid = await Lucid.new();
    lucid.selectWallet(api);

    const address = await lucid.wallet.address();

    dispatch(
      AccountActions.connectWallet({
        wallet: {
          address,
          metadata: item,
          networkId: networkId,
        },
      })
    );
  }, []);

  return [connectWallet];
}

export function useWalletDisconnect(): [(wallet: Object) => void] {
  const dispatch = useDispatch();

  const disconnectWallet = useCallback(() => {
    dispatch(AccountActions.disconnectWallet());
  }, []);

  return [disconnectWallet];
}
