"use client";

import React, { useState } from "react";
import { navigationData } from "../data";
import { MenuOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

const activeStyle =
  "after:content-[''] after:absolute after:right-0 after:top-0 after:w-[3px] after:h-[100%] after:bg-white bg-[#A3248E]";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const path = usePathname();

  const activeRoute = path.split("/")[2];

  return (
    <div className="w-[100%] h-10 px-4 text-white flex items-center">
      <div
        className="block w-[24px] h-[24px]"
        onClick={() => setShowMenu(true)}
      >
        <MenuOutlined className="text-[#990D81] " />
      </div>
      <div
        className={`w-[100%] h-[100svh] fixed flex flex-col bg-[#990D81] top-0 left-0 p-4 ${
          !showMenu ? "hidden" : ""
        }`}
      >
        <div className="flex flex-[1] items-center justify-center w-[100%] mt-8 pb-4 border-b-[0.5px] border-b-gray-300">
          <div className="h-[80px] w-[80px] bg-white">LOGO</div>
        </div>

        <div className="flex-[4] mt-10">
          {navigationData.map((item) => (
            <div
              className={`px-4 text-[14px] font-[300] flex item-center py-2 gap-2 rounded-md relative overflow-hidden ${
                activeRoute === item.path ? activeStyle : ""
              }`}
              key={`navigation-${Math.random()}`}
            >
              {item.Icon}
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
