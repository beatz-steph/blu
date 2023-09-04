import { HomeFilled, MessageFilled } from "@ant-design/icons";
import { NavigationItem } from "../types";

export const navigationData: NavigationItem[] = [
  {
    text: "Dashboard",
    path: "dashboard",
    Icon: <HomeFilled width={24} height={24} color="#fff" />,
  },
  {
    text: "Requests",
    path: "requests",
    Icon: <MessageFilled width={24} height={24} color="#fff" />,
  },
];
