import { createAction } from "@reduxjs/toolkit";

export const updateAddress = createAction<{ address: string }>(
  "account/updateAddress"
);

export const updateProfile =
  createAction<{ profile: Object }>("account/profile");


export const updateAuth = createAction<{ auth: Object }>("account/auth");

export const login = createAction<{ auth: Object }>("account/login");
export const logout = createAction<{ auth: Object }>("account/logout");

export const updateWallet = createAction<{ wallet: Object }>("account/wallet/update");
export const connectWallet = createAction<{ wallet: Object }>("account/wallet/connect");
export const disconnectWallet = createAction<{}>("account/wallet/disconnect");
