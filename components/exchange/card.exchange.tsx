import { twMerge } from "tailwind-merge";
import { ComponentProps } from "react";
import { theme, Card, Button } from "antd";
import { useAddressManager } from "@/hooks/account.hook";

const { useToken } = theme;

export const ExchangeCard = ({
  className,
  style,
  trade,
}: ComponentProps<{}>) => {
  const { token } = useToken();
  const [account] = useAddressManager();

  const CardTypeMap = {
    buy: {
      name: "Buy",
      button: <Button type="primary">Buy</Button>
    },
    sell: {
      name: "Sell",
      button: <Button type="primary" danger >Stop</Button>
    },
  };

  const cardType = CardTypeMap[trade.type];

  return (
    <Card
      className={twMerge("", className)}
      bodyStyle={{
        height: '100%'
      }}
      style={Object.assign(
        {
          boxShadow: token.Card.boxShadow,
          height: 184,
          opacity: !account ? 0.3 : 1,
        },
        style
      )}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <span className="semibold text-xl inline-block mb-1">{trade.title}</span>
          <span
            style={{
              color: token.colorTextTertiary,
            }}
          >
            {trade.description}
          </span>
        </div>
        <div className="flex justify-between items-end self-stretch">
          <div className="flex flex-col ">
            <span className="text-sm">{cardType.name} Price:</span>
            <span
              className="semibold"
              style={{
                color: token.colorPrimary,
              }}
            >
              {trade.price}
            </span>
          </div>
          {cardType.button}
        </div>
      </div>
    </Card>
  );
};
