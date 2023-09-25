import "@/styles/globals.css";
import "@/styles/antd.css";

import type { AppProps } from "next/app";
import Head from 'next/head'
import React from "react";
import { ConfigProvider, Spin } from "antd";
import { wrapper } from "@/store/index.store";
import { useStore, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { StyleProvider } from "@ant-design/cssinjs";

import getTheme from "@/themes/config.theme";

function App({ Component, ...rest}: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <ConfigProvider theme={getTheme()}>
      <Head>
      <title>Changeblock MVP</title>
      </Head>
      <StyleProvider hashPriority="high">
        <Provider store={store}>
          <PersistGate
            loading={
              <div className="min-h-screen flex justify-center items-center">
                <Spin size="large" />
              </div>
            }
            persistor={persistor}
          >
            <Component {...props.pageProps} />
          </PersistGate>
        </Provider>
      </StyleProvider>
    </ConfigProvider>
  );
}

export default App;
