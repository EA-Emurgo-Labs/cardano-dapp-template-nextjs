import { Button, theme } from "antd";
import { twMerge } from "tailwind-merge";
import { ComponentProps, useMemo } from "react";
import { truncate } from "@/utils/address.util";
import { useWalletManager } from "@/hooks/account.hook";
import { useCallback } from "react";

const { useToken } = theme;

const ADDRESS = "0x75c0C766C7a4D0744544B4f8D37C8362f64219eC";
export const WalletConnect = ({ className }: ComponentProps<{}>) => {
  const { token } = useToken();
  const [wallet, updateWallet] = useWalletManager();

  const handleConnect = useCallback(() => {
    updateWallet({
      address: ADDRESS
    });
  }, []);

  const handleDisconnect = useCallback(() => {
    updateWallet({
      address: ""
    });
  }, []);

  const wrappedClassName = useMemo(() => {
    return twMerge("flex items-center text-2xl", className)
  }, [className])

  if (!wallet.address) {
    return (
      <div className={wrappedClassName}>
        <span className="font-semibold">Connect to your wallet:</span>
        <Button onClick={handleConnect} type="primary" className="ml-1.5">
          CONNECT WALLET
        </Button>
      </div>
    );
  }

  return (
    <div className={wrappedClassName}>
      <span className="font-semibold inline-block mr-1.5">Wallet:</span>
      <span style={{ color: token.colorTextTertiary }}>
        {truncate(wallet.address)}
      </span>
      <Button onClick={handleDisconnect} type="primary" ghost className="ml-3" size="small">
        Disconnect
      </Button>
    </div>
  );
};
