import { createReducer } from "@reduxjs/toolkit";
import {
  updateRehydrate,
} from "@/actions/global.action";

export const initialState = {
  rehydrated: false,
  complete: true
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateRehydrate, (state) => {
      state.rehydrated =false;
      state.complete = true
    })
);
