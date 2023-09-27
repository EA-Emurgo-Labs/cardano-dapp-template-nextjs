import { createReducer } from "@reduxjs/toolkit";
import * as AccountActions from "@/actions/account.action";

export interface AccountState {
  isDark: boolean;
  address: string;
}

export const initialState: AccountState = {
  profile: {},
  auth: {},
  wallet: {
    networkId: "",
    provider: "",
    balance: "",
    address: "",
  },
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(
      AccountActions.updateProfile,
      (state, { payload: { profile } }) => {
        state.profile = Object.assign({}, state.profile, profile);
      }
    )
    .addCase(AccountActions.updateAuth, (state, { payload: { auth } }) => {
      state.auth = Object.assign({}, state.auth, auth);
    })
    .addCase(AccountActions.login, (state, { payload: { auth, profile } }) => {
      state.auth = Object.assign({}, auth);
      state.profile = Object.assign({}, profile);
    })
    .addCase(AccountActions.logout, (state) => {
      state.auth = Object.assign({}, initialState.auth);
      state.profile = Object.assign({}, initialState.profile);
      state.wallet = Object.assign({}, initialState.wallet);
    })
    .addCase(AccountActions.updateWallet, (state, { payload: { wallet } }) => {
      state.wallet = Object.assign({}, state.wallet, wallet);
    })
    .addCase(AccountActions.connectWallet, (state, { payload: { wallet } }) => {
      state.wallet = Object.assign({}, wallet);
    })
    .addCase(AccountActions.disconnectWallet, (state) => {
      state.wallet = Object.assign({}, initialState.wallet);
    })
);
