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
  wallet: {
    network: '',
    selected: '',
    balance: '',
    address: ''
  },
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateProfile, (state, { payload: { profile } }) => {
      state.profile = Object.assign({}, state.profile, profile);
    })
    .addCase(updateAuth, (state, { payload: { auth } }) => {
      state.auth = Object.assign({}, state.auth, auth);
    })
    .addCase(updateWallet, (state, { payload: { wallet } }) => {
      state.wallet = Object.assign({}, state.wallet, wallet);
    })
);
