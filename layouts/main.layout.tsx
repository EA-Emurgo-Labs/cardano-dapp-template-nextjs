import { PropsWithChildren, useMemo, useCallback } from "react";
import { ConfigProvider, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Siderbar } from "@/components/siderbar.component";
import { useSiderbarManager } from "@/hooks/global.hook";
import getTheme from "@/themes/config.theme";
import { useThemeManager } from "@/hooks/global.hook";

export const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  const [siderbar, updateSiderbar] = useSiderbarManager();
  const [theme] = useThemeManager();

  const themeConfig = useMemo(() => getTheme(theme), [theme]);
  const token = useMemo(() => {
    return Object.assign({}, themeConfig.token, themeConfig.components);
  }, [themeConfig, theme]);


  const handleSiderbarCollapsed = useCallback(() => {
    updateSiderbar({
      collapsed: !siderbar.collapsed,
    });
  }, [siderbar]);

  return (
    <ConfigProvider
      theme={{
        ...themeConfig,
      }}
    >
      <div className="flex w-full">
        <Siderbar />
        <div
          className="min-h-screen pl-4 pr-4  sm:pl-12 py-14 sm:pr-32  sm:ml-64"
          style={{
            backgroundColor: token.colorBgLayout,
            width: "inherit",
          }}
        >
          <div className="absolute top-4 block sm:hidden">
            <Button
              type="link"
              onClick={handleSiderbarCollapsed}
              icon={
                siderbar.collapsed ? (
                  <MenuUnfoldOutlined />
                ) : (
                  <MenuFoldOutlined />
                )
              }
            ></Button>
          </div>
          <div className="flex flex-col relative">{children}</div>
        </div>
      </div>
    </ConfigProvider>
  );
};
