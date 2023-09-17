import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/reducers/index";
import { useCallback } from "react";

import {
  toggleTheme as toggleThemeAction,
  updateAddress as updateAddressAction,
} from "@/actions/account.action";

export function useThemeManager() {
  const dispatch = useDispatch();
  const isDark = useSelector<AppState, AppState["account"]["isDark"]>(
    (state) => state.account.isDark
  );

  const toggleTheme = useCallback(() => {
    dispatch(toggleThemeAction());
  }, [dispatch]);

  return [isDark, toggleTheme];
}

export function useAddressManager(): [string, (address: string) => void] {
  const dispatch = useDispatch();
  const address = useSelector<AppState, AppState["account"]["address"]>(
    (state) => state.account.address
  );

  const updateAddress = useCallback(
    (address: any) => {
      dispatch(updateAddressAction({ address }));
    },
    [dispatch]
  );

  return [address, updateAddress];
}
