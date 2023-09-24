import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore } from "redux-persist";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";

import storage from "@/store/sync-storage.store";
import account from "@/reducers/account.reducer";
import global from "@/reducers/global.reducer";

const rootReducer = combineReducers({
  account,
  global
});

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }) => {
  const enhancer = compose(bindMiddleware([thunkMiddleware]));
  if (isServer) {
    return createStore(rootReducer, enhancer);
  } else {
    const { persistStore, persistReducer } = require("redux-persist");

    const persistConfig = {
      timeout: 1000,
      key: "changeblock",
      whitelist: ["account"],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

    const store = createStore(
      persistedReducer,
      rootReducer(undefined, {}),
      enhancer
    ); // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store;
  }
};

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
