import { twMerge } from "tailwind-merge";
import { ComponentProps } from "react";
import { Row, Col } from "antd";
import { ExchangeCard } from "@/components/exchange/card.exchange";

export const ExchangeBuy = ({ className, style }: ComponentProps<{}>) => {
  return (
    <Row gutter={[8, 9]}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13].map((item) => (
        <Col key={item} span={8}>
          <ExchangeCard
            className={twMerge("", className)}
            trade={{
              title: "Title",
              description: "Description",
              price: 88899.874655,
              type: "buy",
            }}
          />
        </Col>
      ))}
    </Row>
  );
};
