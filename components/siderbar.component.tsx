import React, { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HomeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Typography, theme, Button, Switch, Menu, Avatar, Space } from "antd";
import { LogoutOutlinedIcon } from "@/components/icons/logout-outlined.icon";
import { useProfileManager, useAccountLogout } from "@/hooks/account.hook";
import { useSiderbarManager } from "@/hooks/global.hook";
const { Text } = Typography;

const { useToken } = theme;
const IconsMap = {
  HomeOutlined: HomeOutlined,
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  key: string,
  label: string,
  icon?: string,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  const IconNode = IconsMap[icon];
  return {
    key: key,
    icon: <IconNode />,
    children,
    label: <span className="text-sm">{label}</span>,
    type,
  } as MenuItem;
}

export const Siderbar = () => {
  const { token } = useToken();
  const router = useRouter();
  const [, updateProfile] = useProfileManager();
  const [siderbar, updateSiderbar] = useSiderbarManager();
  const [logout] = useAccountLogout();

  const handleItemClick = useCallback((item) => {
    updateSiderbar({
      collapsed: false,
    });
    router.push(item.key);
  }, []);

  const items: MenuItem[] = [getItem("/", "Home", "HomeOutlined")];

  const handleLogout = useCallback(() => {
    logout();
    updateSiderbar({
      collapsed: false,
    });
  }, []);

  const handleThemeChange = useCallback(() => {}, []);

  return (
    <div
      className="fixed h-screen hidden sm:block z-10"
      style={{
        boxShadow: token.Menu.boxShadow,
        backgroundColor: token.colorBgBase,
        width: 256,
        display: siderbar.collapsed ? "block" : "",
      }}
    >
      <Link
        href="/"
        className="flex justify-center items-center"
        style={{ height: 60 }}
      >
        <span
          className="inline-block text-center font-semibold text-2xl"
          style={{
            height: 34,
            width: 185,
            backgroundColor: token.colorPrimary,
            color: "white",
          }}
        >
          DEMO UI
        </span>
      </Link>
      <Menu
        onClick={handleItemClick}
        selectedKeys={router.pathname}
        mode="inline"
        items={items}
      />
      <div className="px-4 w-full absolute bottom-0">
        <div className="mb-4">
          <Switch defaultChecked onChange={handleThemeChange} />
          <Text className="ml-2.5 inline-block">Dark mode</Text>
        </div>
        <div
          className="flex border-t border-solid  justify-between py-2 w-full"
          style={{
            backgroundColor: token.Logout.colorBgContainer,
            borderColor: token.Logout.colorBorder,
          }}
        >
          <Space>
            <Avatar
              style={{
                backgroundColor: token.colorBgElevated,
              }}
            >
              <span className="text-xs">AU</span>
            </Avatar>
            <Text>Admin</Text>
          </Space>
          <Button
            onClick={handleLogout}
            type="text"
            size="small"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            icon={<LogoutOutlinedIcon />}
          ></Button>
        </div>
      </div>
      <style jsx global>{`
        .ant-menu-item-selected {
          box-shadow: ${token.Menu.itemSelectedBoxShadow};
        }
      `}</style>
    </div>
  );
};
