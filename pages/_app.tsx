import "@/styles/globals.css";
import "@/styles/antd.css";

import type { AppProps } from "next/app";
import React from "react";
import { ConfigProvider, Spin } from "antd";
import { wrapper } from "@/store/index.store";
import { useStore, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import getTheme from "@/themes/config.theme";

function App({ Component, pageProps }: AppProps) {
  const store = useStore((state) => state);

  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <ConfigProvider theme={getTheme()}>
      <Provider store={store}>
        <PersistGate
          loading={
            <div className="min-h-screen flex justify-center items-center">
              <Spin size="large" />
            </div>
          }
          persistor={persistor}
        >
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
}

export default wrapper.withRedux(App);
