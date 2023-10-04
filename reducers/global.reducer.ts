import { createReducer } from "@reduxjs/toolkit";
import {
  updateTheme,
  updateRehydrate,
  updateSidebar,
} from "@/actions/global.action";
import { themes } from "@/themes/constant.theme";

export const initialState = {
  rehydrated: false,
  complete: true,
  siderbar: {},
  theme: themes.light,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateRehydrate, (state) => {
      state.rehydrated = false;
      state.complete = true;
    })
    .addCase(updateSidebar, (state, { payload: { siderbar } }) => {
      state.siderbar = Object.assign({}, state.siderbar, siderbar);
    })
    .addCase(updateTheme, (state, { payload: { theme } }) => {
      state.theme = theme;
    })
);
