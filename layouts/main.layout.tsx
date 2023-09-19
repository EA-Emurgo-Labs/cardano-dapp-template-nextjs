import { PropsWithChildren } from "react";
import { theme } from "antd";
import { Siderbar } from "@/components/siderbar.component";
import { WalletConnect } from "@/components/wallet-connect.component";

const { useToken } = theme;

export const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  const { token } = useToken();
  return (
    <div className="flex w-full">
      <Siderbar />
      <div
        className="min-h-screen pl-12 py-14 pr-32"
        style={{
          backgroundColor: token.colorBgLayout,
          width: "inherit",
          marginLeft: 256,
        }}
      >
        <div className="flex flex-col relative">{children}</div>
      </div>
    </div>
  );
};
