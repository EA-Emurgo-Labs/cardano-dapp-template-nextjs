import type { ThemeConfig } from "antd";
import { theme } from "antd";
import Colors from "@/constants/colors.constant";

const DarkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: Colors.GeekBlue.geekblue6,
    colorLink: Colors.GeekBlue.geekblue6,
    colorTextBase: "#fff",
    colorTextTertiary: Colors.gray.gray3,
    colorBgLayout: Colors.gray.gray9,
    colorBgElevated: Colors.GeekBlue.geekblue5,
  },
  components: {
    Input: {
      colorText: Colors.gray.gray7,
    },
    Menu: {},
    Logout: {
      colorBorder: Colors.gray.gray4,
    },
    Card: {
      boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
    },
    Upload: {
      colorFillAlter: Colors.gray.gray3,
      colorText: Colors.gray.gray7,
      colorTextDescription: Colors.gray.gray8,
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

export default DarkTheme;
