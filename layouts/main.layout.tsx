import { PropsWithChildren, useState, useCallback } from "react";
import { theme, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Siderbar } from "@/components/siderbar.component";
import { useSiderbarManager } from "@/hooks/global.hook";

const { useToken } = theme;

export const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  const { token } = useToken();
  const [siderbar, updateSiderbar] = useSiderbarManager();

  const handleSiderbarCollapsed = useCallback(() => {
    updateSiderbar({
      collapsed: !siderbar.collapsed,
    });
  }, [siderbar]);

  return (
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
              siderbar.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }
          ></Button>
        </div>
        <div className="flex flex-col relative">{children}</div>
      </div>
    </div>
  );
};
