import type { ThemeConfig } from "antd";
import { theme } from "antd";
import Colors from "@/constants/colors.constant";

const LightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: Colors.GeekBlue.geekblue6,
    colorLink: Colors.GeekBlue.geekblue6,
    colorTextBase: Colors.gray.gray9,
    colorText: Colors.gray.gray9,
    colorTextTertiary: Colors.gray.gray8,
    colorBgLayout: Colors.extra.bg1,
    colorBgElevated: Colors.GeekBlue.geekblue5,
  },
  components: {
    Input: {
      colorText: Colors.gray.gray7,
    },
    Menu: {
      itemSelectedBg: Colors.GeekBlue.geekblue1,
      itemSelectedColor: Colors.GeekBlue.geekblue6,
      boxShadow: "-1px 0px 0px 0px #F0F0F0 inset",
      itemSelectedBoxShadow: "-3px 0px 0px 0px #0400C6 inset",
    },
    Divider: {
      colorSplit: Colors.gray.gray4
    },
    Logout: {
      colorBgContainer: Colors.gray.gray2,
      colorBorder: Colors.gray.gray4,
    },
    Card: {
      boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
    },
    Upload: {
      colorFillAlter: Colors.gray.gray3,
      colorText: Colors.gray.gray7,
      colorBorder: Colors.gray.gray5,
      colorTextDescription: Colors.gray.gray8,
      colorBgButton: '#fff',
      colorBorderButton: Colors.gray.gray5
    },
    Modal: {
      colorTextBase: Colors.gray.gray9,
      contentBg: "#ffffff",
      headerBg: "#ffffff",
    },
    Message: {
      contentBg: "#ffffff",
    },
    Exchange: {
      Card: {
        boxShadow: "0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
      },
    },
  },
};

export default LightTheme;
