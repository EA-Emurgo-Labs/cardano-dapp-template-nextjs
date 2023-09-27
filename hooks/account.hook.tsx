import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/reducers/index";
import { useCallback } from "react";

import * as AccountActions from "@/actions/account.action";

export function useProfileManager(): [Object, (profile: Object) => void] {
  const dispatch = useDispatch();
  const profile = useSelector<AppState, AppState["account"]["profile"]>(
    (state) => state.account.profile
  );

  const updateProfile = useCallback((profile: any) => {
    dispatch(AccountActions.updateProfile({ profile }));
  }, []);

  return [profile, updateProfile];
}

export function useWalletManager(): [Object, (wallet: Object) => void] {
  const dispatch = useDispatch();
  const wallet = useSelector<AppState, AppState["account"]["wallet"]>(
    (state) => state.account.wallet
  );

  const updateWallet = useCallback((wallet: any) => {
    dispatch(AccountActions.updateWallet({ wallet }));
  }, []);

  return [wallet, updateWallet];
}

export function useAuthManager(): [Object, (auth: Object) => void] {
  const dispatch = useDispatch();
  const auth = useSelector<AppState, AppState["account"]["auth"]>(
    (state) => state.account.auth
  );

  const updateAuth = useCallback((auth: any) => {
    dispatch(AccountActions.updateAuth({ auth }));
  }, []);

  return [auth, updateAuth];
}

export function useAccountLogout() {
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(AccountActions.logout());
  }, []);

  return [logout];
}
