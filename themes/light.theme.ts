import type { ThemeConfig } from "antd";
import Colors from "@/constants/colors";

const theme: ThemeConfig = {
  token: {
    colorPrimary: Colors.DaybreakBlue.main6,
    colorLink: Colors.DaybreakBlue.main6,
    colorTextBase: Colors.gray.gray9,
    colorTextTertiary: Colors.gray.gray8,
    colorBgLayout: Colors.extra.bg1,
    colorBgElevated: Colors.DaybreakBlue.main5,
  },
  components: {
    Input: {
      colorText: Colors.gray.gray7,
    },
    Menu: {
      itemSelectedBg: Colors.DaybreakBlue.main1,
      boxShadow: "-1px 0px 0px 0px #F0F0F0 inset",
      itemSelectedBoxShadow: "-3px 0px 0px 0px #00c689 inset"
    },
    Logout: {
      colorBgContainer: Colors.gray.gray2,
      colorBorder: Colors.gray.gray4,
    },
    Card: {
      boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.08)"
    },
    Upload: {
      colorFillAlter: Colors.gray.gray3,
      colorText: Colors.gray.gray7,
      colorTextDescription: Colors.gray.gray8,
    }
  },
};

export default theme;
