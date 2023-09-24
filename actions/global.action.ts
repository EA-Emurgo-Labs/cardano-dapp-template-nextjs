import { createAction } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";

export const updateRehydrate = createAction(REHYDRATE);

export const updateSidebar = createAction<{ siderbar: Object }>(
  "global/siderbar"
);
