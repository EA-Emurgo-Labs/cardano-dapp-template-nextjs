import type { ThemeConfig } from "antd";
import LightTheme from "./light.theme";
import { merge } from "@/utils/object.util";

const defaultConfig: ThemeConfig = {
  token: {
    fontSize: 16,
    controlHeight: 40,
    borderRadius: 8,
  },
  components: {
    Form: {
      fontSize: 14,
    },
    Menu: {
      itemMarginInline: 0,
      itemHeight: 40,
      itemBorderRadius: 0,
    },
    Avatar: {
      containerSize: 32,
    },
    Upload: {
      fontSize: 14,
      borderRadiusLG: 2
    },
    Button: {
      paddingContentHorizontal: 25,
    }
  },
};

export default (name) => {
  const themes = {
    light: LightTheme,
  };

  const theme = themes[name || "light"];

  return merge(defaultConfig, theme);
};
