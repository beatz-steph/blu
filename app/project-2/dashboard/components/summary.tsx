import React from "react";
import SummaryCard from "./summary_card";
import {
  CheckOutlined,
  HistoryOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const data = [
  {
    text: "Pending Request",
    value: 1277377,
    Icon: <HistoryOutlined width={24} height={24} />,
    iconColor: "#3049D1",
    info: "4.07%",
    iconBg: "#EBEDFA",
    infoColor: "#4BDE97",
  },
  {
    text: "Approved Request",
    value: 355627,
    Icon: <CheckOutlined width={24} height={24} />,
    iconColor: "#FFB648",
    info: "0.24%",
    iconBg: "#FFF8ED",
    infoColor: "#4BDE97",
  },

  {
    text: "Total Agents",
    value: 154267,
    Icon: <ShopOutlined width={24} height={24} />,
    iconColor: "#9473F1",
    info: "4.07%",
    iconBg: "#EFEAFE",
    infoColor: "#F26464",
  },
  {
    text: "Total Users",
    value: 167,
    Icon: <UsergroupAddOutlined width={24} height={24} />,
    iconColor: "#4BDE97",
    info: "0.24%",
    iconBg: "#EDFCF5",
    infoColor: "#4BDE97",
  },
];

const Summary = () => {
  return (
    <div className="pt-5 w-[100%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 auto-rows-max">
      {data.map((item) => (
        <SummaryCard {...item} key={`summary-${Math.random()}`} />
      ))}
    </div>
  );
};

export default Summary;
