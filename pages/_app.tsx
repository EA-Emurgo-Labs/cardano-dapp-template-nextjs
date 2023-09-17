import "@/styles/globals.css";
import "@/styles/antd.css";

import type { AppProps } from "next/app";
import React from "react";
import { ConfigProvider } from "antd";
import { wrapper } from "@/reducers/index";

import getTheme from "@/themes/config.theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={getTheme()}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}


export default wrapper.withRedux(App);
