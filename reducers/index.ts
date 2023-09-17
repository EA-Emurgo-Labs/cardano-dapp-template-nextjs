import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { useDispatch } from "react-redux";

import account from "./account.reducer";

export type SerializedBigNumber = string;

const PERSISTED_KEYS: string[] = ["account"];

const makeStore = () =>
  configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer: {
      account,
    },
  });

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export const useAppDispatch = () => useDispatch();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
