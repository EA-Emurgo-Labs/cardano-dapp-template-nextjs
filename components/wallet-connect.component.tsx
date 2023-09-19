import { Button, theme } from "antd";
import { twMerge } from "tailwind-merge";
import { ComponentProps, useMemo } from "react";
import { truncate } from "@/utils/address.util";
import { useAddressManager } from "@/hooks/account.hook";
import { useCallback } from "react";

const { useToken } = theme;

const ADDRESS = "0x75c0C766C7a4D0744544B4f8D37C8362f64219eC";
export const WalletConnect = ({ className }: ComponentProps<{}>) => {
  const { token } = useToken();
  const [address, updateAddress] = useAddressManager();

  const handleConnect = useCallback(() => {
    updateAddress(ADDRESS);
  }, []);

  const handleDisconnect = useCallback(() => {
    updateAddress("");
  }, []);

  const wrappedClassName = useMemo(() => {
    return twMerge("flex items-center text-2xl", className)
  }, [className])

  if (!address) {
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
        {truncate(address)}
      </span>
      <Button onClick={handleDisconnect} type="primary" ghost className="ml-3" size="small">
        Disconnect
      </Button>
    </div>
  );
};
