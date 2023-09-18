import { Tabs } from "antd";
import { MainLayout } from "@/layouts/main.layout";
import { ExchangeBuy } from "@/components/exchange/buy.exchange";
import { ExchangeSell } from "@/components/exchange/sell.exchange";

const Title = () => {
  const items: TabsProps["items"] = [
    {
      key: "/exchange/buy",
      label: "Buy",
      children: <ExchangeBuy />,
    },
    {
      key: "/exchange/sell",
      label: "Sell",
      children: <ExchangeSell />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items}  />;
};

export default function ExchangePage() {
  return (
    <MainLayout title={Title}>
      <Title />
    </MainLayout>
  );
}
