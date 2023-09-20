import { createReducer } from "@reduxjs/toolkit";
import {
  updateProfile,
  updateAuth,
  updateWallet,
} from "@/actions/account.action";

export interface AccountState {
  isDark: boolean;
  address: string;
}

export const initialState: AccountState = {
  address: "",
  profile: {},
  auth: {},
  wallet: {},
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateProfile, (state, { payload: { profile } }) => {
      console.log("updateProfile: ", profile);
      state.profile = Object.assign({}, state.profile, profile);
    })
    .addCase(updateAuth, (state, { payload: { auth } }) => {
      console.log("updateAuth: ", auth);
      state.auth = Object.assign({}, state.auth, auth);
    })
    .addCase(updateWallet, (state, { payload: { wallet } }) => {
      console.log("updateWallet: ", wallet);
      state.wallet = Object.assign({}, state.wallet, wallet);
    })
);
