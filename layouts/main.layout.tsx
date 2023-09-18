import { PropsWithChildren } from "react";
import { theme } from "antd";
import { Siderbar } from "@/components/siderbar.component";
import { WalletConnect } from "@/components/wallet-connect.component";

const { useToken } = theme;

export const MainLayout = ({ children, title }: PropsWithChildren<{}>) => {
  const { token } = useToken();
  return (
    <div className="flex w-full">
      <Siderbar />
      <div
        className="min-h-screen flex pl-12 pt-14 pr-32 flex-col"
        style={{
          backgroundColor: token.colorBgLayout,
          width: "inherit",
          marginLeft: 256
        }}
      >
        <div className="flex justify-between">
          {title && <div>{title}</div>}
          <WalletConnect />
        </div>
        {children}
      </div>
    </div>
  );
};
