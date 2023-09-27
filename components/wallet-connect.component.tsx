import { Row, Col, Modal, Button, theme } from "antd";
import { twMerge } from "tailwind-merge";
import { ComponentProps, useMemo, useState } from "react";
import { truncate } from "@/utils/address.util";
import { useWalletManager } from "@/hooks/account.hook";
import { useCallback } from "react";
import { Wallets } from "@/constants/wallets.constant";
import { useWalletConnect } from "@/hooks/wallet.hook";

const { useToken } = theme;

export const WalletConnect = ({ style, className }: ComponentProps<{}>) => {
  const { token } = useToken();
  const [wallet, updateWallet] = useWalletManager();
  const [_, connectWallet] = useWalletConnect();
  const [selcectWalletModal, updateSelectWalletModal] = useState({
    open: false,
  });

  const [loading, setLoading] = useState("");

  const handleConnect = useCallback(async (item) => {
    try {
      setLoading(item.id);
      await connectWallet(item);
      updateSelectWalletModal({
        open: false,
      });
    } catch (error) {
      console.log("error:", error);
    } finally {
      setLoading("");
    }
  }, []);

  const handleDisconnect = useCallback(() => {
    updateWallet({
      address: "",
    });
  }, []);

  const wrappedClassName = useMemo(() => {
    return twMerge(
      "flex absolute top-2 min-h-10 items-center text-sm sm:text-2xl ",
      className
    );
  }, [className]);

  const wrappedStyle = useMemo(() => {
    return Object.assign(
      {},
      {
        minHeight: 40,
      },
      style
    );
  }, [style]);

  const handleConnectBtnClick = useCallback(() => {
    updateSelectWalletModal({ open: true });
  }, []);

  const handleSelectWalletModalClose = useCallback(() => {
    updateSelectWalletModal({ open: false });
  }, []);

  if (!wallet.address) {
    return (
      <div className={wrappedClassName} style={wrappedStyle}>
        <span className="font-semibold hidden sm:block">
          Connect to your wallet:
        </span>
        <Button
          onClick={handleConnectBtnClick}
          type="primary"
          className="ml-1.5"
        >
          CONNECT WALLET
        </Button>
        <Modal
          title="Select a wallet"
          open={selcectWalletModal.open}
          footer={null}
          onCancel={handleSelectWalletModalClose}
        >
          <Row gutter={[16, 16]}>
            {Wallets.map((item) => (
              <Col key={`wallet-${item.id}`} span={24}>
                <Button
                  onClick={() => handleConnect(item)}
                  block
                  style={{
                    minHeight: 64,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  loading={loading == item.id}
                >
                  <div className="flex items-center justify-between" style={{
                    width: 'inherit'
                    }}>
                    {item.name}
                    <item.icon />
                  </div>
                </Button>
              </Col>
            ))}
          </Row>
        </Modal>
      </div>
    );
  }

  return (
    <div className={wrappedClassName} style={wrappedStyle}>
      <span className="font-semibold inline-block mr-1.5">Wallet:</span>
      <span style={{ color: token.colorTextTertiary }}>
        {truncate(wallet.address)}
      </span>
      <Button
        onClick={handleDisconnect}
        type="primary"
        ghost
        className="ml-3"
        size="small"
      >
        Disconnect
      </Button>
    </div>
  );
};
