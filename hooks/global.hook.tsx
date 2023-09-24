import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/reducers/index";
import { useCallback } from "react";

import * as  GlobalActions from "@/actions/global.action";

export function useSiderbarManager(): [Object, (profile: Object) => void] {
  const dispatch = useDispatch();
  const siderbar = useSelector<AppState, AppState["global"]["siderbar"]>(
    (state) => state.global.siderbar
  );

  const updateSidebar = useCallback((siderbar: any) => {
    dispatch(GlobalActions.updateSidebar({ siderbar }));
  }, []);

  return [siderbar, updateSidebar];
}
