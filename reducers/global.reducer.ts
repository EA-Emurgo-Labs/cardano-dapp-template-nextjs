import { createReducer } from "@reduxjs/toolkit";
import { updateRehydrate, updateSidebar } from "@/actions/global.action";

export const initialState = {
  rehydrated: false,
  complete: true,
  siderbar: {},
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
);
