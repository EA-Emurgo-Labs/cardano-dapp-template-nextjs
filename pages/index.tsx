import React, { useState } from "react";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Card,
  Form,
  InputNumber,
  Select,
  Upload,
  Button,
  theme,
  Col,
  Divider,
  Row,
  Space,
  message,
  Typography,
} from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { MainLayout } from "@/layouts/main.layout";
import { useWalletManager } from "@/hooks/account.hook";
import { WalletConnect } from "@/components/wallet-connect.component";
const { Text } = Typography;

const { useToken } = theme;

const ICard = ({ children, token, step, style, account }) => {
  return (
    <Card
      style={Object.assign(
        {
          boxShadow: token.Card.boxShadow,
          opacity: !account ? 0.3 : 1,
          minHeight: 240,
        },
        style
      )}
    >
      <div className="flex flex-col">
        <Space className="text-2xl sm:text-3xl font-semibold mb-4">
          <span
            style={{
              color: token.colorPrimary,
            }}
          >
            Step {step.no}.
          </span>
          <span>{step.title}</span>
        </Space>
        {children}
      </div>
    </Card>
  );
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export default function TokenizePage() {
  const { token } = useToken();

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [wallet] = useWalletManager();

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined style={{ fontSize: 32 }} />
      ) : (
        <UploadOutlined style={{ fontSize: 32 }} />
      )}
      <div style={{ marginTop: 6, color: token.Upload.colorTextDescription }}>
        Upload
      </div>
    </div>
  );

  return (
    <MainLayout>
      <WalletConnect />
      <div className="mt-2 pt-16">
        <Form name="mint-token" disabled={!wallet.address}>
          <Row gutter={[22, 22]}>
            <Col span="24" sm={12}>
              <ICard
                token={token}
                account={wallet.address}
                step={{
                  no: 1,
                  title: "Upload your file",
                }}
              >
                <Upload
                  name="avatar"
                  listType="picture-card"
                  style={{ width: 104, height: 104, borderRadius: 2 }}
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    uploadButton
                  )}
                  <style jsx>{`
                    .ant-upload-select {
                      border-radius: 2px;
                    }
                  `}</style>
                </Upload>
              </ICard>
            </Col>
            <Col span="24" sm={12}>
              <ICard
                token={token}
                account={wallet.address}
                step={{
                  no: 2,
                  title: "Upload IPFS",
                }}
              >
                <div className="flex flex-col justify-between h-full">
                  <Upload maxCount={1}>
                    <Button
                      style={{
                        backgroundColor: token.Upload.colorFillAlter,
                      }}
                      icon={<UploadOutlined />}
                    >
                      IFPS Upload
                    </Button>
                  </Upload>
                  <div
                    className="absolute bottom-6"
                    style={{ color: token.colorTextTertiary }}
                  >
                    <span className="font-semibold">CID:</span>--
                  </div>
                </div>
              </ICard>
            </Col>
          </Row>
          <Row className="mt-7">
            <Col span="24">
              <ICard
                token={token}
                account={wallet.address}
                step={{
                  no: 3,
                  title: "Setup token",
                }}
              >
                <Row gutter={20} className="mt-7">
                  <Col span="24" sm={13}>
                    <Form.Item>
                      <Select
                        defaultValue=""
                        className="w-full"
                        options={[
                          { value: "", label: "Select Token" },
                          { value: "token-a", label: "Token A" },
                          { value: "token-b", label: "Token B" },
                        ]}
                      />
                    </Form.Item>
                    <Form.Item label="Token A" name="token-a">
                      <InputNumber
                        style={{ width: "100%" }}
                        placeholder="Enter amount"
                      />
                    </Form.Item>
                    <Form.Item label="Token B" name="token-b">
                      <InputNumber
                        style={{ width: "100%" }}
                        placeholder="Enter amount"
                      />
                    </Form.Item>
                    <Button block type="primary" htmlType="submit">
                      Action
                    </Button>
                  </Col>
                  <Col span="24" sm={1}>
                    <Divider type="vertical" className="min-h-full" />
                  </Col>
                  <Col span="24" sm={10}>
                    <div className="flex flex-col relative min-h-full">
                      <Text>
                        <span className="text-2xl font-semibold">Title</span>
                      </Text>
                      <Text
                        className="inline-block mt-1.5"
                        style={{
                          color: token.colorTextTertiary,
                        }}
                      >
                        Description
                      </Text>

                      <div className="absolute bottom-0 right-0 w-1/2">
                        <Button block type="primary" htmlType="submit">
                          Action
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </ICard>
            </Col>
          </Row>
        </Form>
      </div>
    </MainLayout>
  );
}
