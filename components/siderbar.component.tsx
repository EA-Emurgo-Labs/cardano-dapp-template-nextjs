import React, { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { CreditCardOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { theme, Button, Menu, Avatar, Space } from "antd";
import Logo from "assets/logo.png";
import { CoinOutlinedIcon } from "@/components/icons/coin-outlined.icon";
import { LogoutOutlinedIcon } from "@/components/icons/logout-outlined.icon";
import { useProfileManager } from "@/hooks/account.hook";

const { useToken } = theme;
const IconsMap = {
  CreditCardOutlined: CreditCardOutlined,
  CoinOutlinedIcon: CoinOutlinedIcon,
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: string,
  icon?: string,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  const IconNode = IconsMap[icon];
  return {
    key: `/${label.toLowerCase()}`,
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

  const handleItemClick = useCallback((item) => {
    router.push(item.key);
  }, []);

  const items: MenuItem[] = [
    getItem("Tokenize", "CoinOutlinedIcon"),
    getItem("Exchange", "CreditCardOutlined"),
  ];

  const handleLogout = useCallback(() => {
    updateProfile({
      email: "",
    });
  }, []);

  return (
    <div
      className="fixed h-screen"
      style={{
        boxShadow: token.Menu.boxShadow,
        backgroundColor: token.colorBgBase,
        width: 256,
      }}
    >
      <Link
        href="/"
        className="flex justify-center items-center"
        style={{ height: 60 }}
      >
        <Image src={Logo} alt="Logo" width={185} />
      </Link>
      <Menu
        onClick={handleItemClick}
        selectedKeys={router.pathname}
        mode="inline"
        items={items}
      />
      <div
        className="flex border-t border-solid  justify-between px-4 py-2 w-full absolute bottom-0"
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
          <span>Admin</span>
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
      <style jsx global>{`
        .ant-menu-item-selected {
          box-shadow: ${token.Menu.itemSelectedBoxShadow};
        }
      `}</style>
    </div>
  );
};
