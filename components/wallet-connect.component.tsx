import { Button, theme } from "antd";
import { truncate } from "@/utils/address.util";
import { useAddressManager } from "@/hooks/account.hook";
import { useCallback } from "react";

const { useToken } = theme;

const ADDRESS = "0x75c0C766C7a4D0744544B4f8D37C8362f64219eC";
export const WalletConnect = ({}) => {
  const { token } = useToken();
  const [address, updateAddress] = useAddressManager();

  const handleConnect = useCallback(() => {
    updateAddress(ADDRESS);
  }, []);

  const handleDisconnect = useCallback(() => {
    updateAddress("");
  }, []);

  if (!address) {
    return (
      <div className="flex items-center">
        <span className="text-2xl semibold">Connect to your wallet:</span>
        <Button onClick={handleConnect} type="primary" className="ml-1.5">
          CONNECT WALLET
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center text-2xl">
      <span className="semibold inline-block mr-1.5">Wallet:</span>
      <span style={{ color: token.colorTextTertiary }}>
        {truncate(address)}
      </span>
      <Button onClick={handleDisconnect} type="primary" ghost className="ml-3">
        Disconnect
      </Button>
    </div>
  );
};
