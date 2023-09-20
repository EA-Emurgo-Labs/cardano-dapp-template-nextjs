import { createAction } from "@reduxjs/toolkit";

export const updateAddress = createAction<{ address: string }>(
  "account/updateAddress"
);

export const updateProfile =
  createAction<{ profile: Object }>("account/profile");

export const updateWallet = createAction<{ wallet: Object }>("account/wallet");

export const updateAuth = createAction<{ auth: Object }>("account/auth");
