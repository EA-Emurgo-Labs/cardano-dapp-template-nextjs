import { useDispatch, useSelector } from "react-redux";
import { Lucid } from "lucid-cardano";
import { AppState } from "@/reducers/index";
import { useCallback } from "react";
import { Wallets } from "@/wallets/index.wallet";
import Networks from '@/constants/network.constant'
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
    if (networkId != process.env.NEXT_PUBLIC_NETWORK_ID) {
      throw new Error(
        `Set network to "${Networks[process.env.NEXT_PUBLIC_NETWORK_ID]}" in your ${item.id} wallet to use`
      );
    }

    const lucid = await Lucid.new();
    lucid.selectWallet(api);

    const address = await lucid.wallet.address();

    wallet.subscribeEvents({
      dispatch,
      lucid,
      api,
    });

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

  const wallet = useSelector<AppState, AppState["account"]["wallet"]>(
    (state) => state.account.wallet
  );

  const disconnectWallet = useCallback(() => {
    if (wallet.metadata && wallet.metadata.id) {
      const _wallet = new Wallets[wallet.metadata.id]();
      _wallet.unsubscribeEvents();
    }
    dispatch(AccountActions.disconnectWallet());
  }, [wallet]);

  return [disconnectWallet];
}

export function useWalletBalance(): [(wallet: Object) => void] {
  const dispatch = useDispatch();
  const wallet = useSelector<AppState, AppState["account"]["wallet"]>(
    (state) => state.account.wallet
  );

  const getWalletBalance = useCallback(async () => {
    if (wallet && wallet.address) {
      const _wallet = new Wallets[wallet.metadata.id]();
      const api = await _wallet.getApi();

      const lucid = await Lucid.new();
      lucid.selectWallet(api);

      const utxos = await lucid.wallet.getUtxos();
      const lovelace = utxos.reduce(
        (amount, utxo) => amount + utxo.assets.lovelace,
        0n
      );

      dispatch(
        AccountActions.updateWallet({
          wallet: {
            balance: lovelace.toString(),
          },
        })
      );
    }
  }, []);

  return [wallet.balance, getWalletBalance];
}
