"use client";

import React, { useState } from "react";
import { navigationData } from "../data";
import { MenuOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const activeStyle =
  "after:content-[''] after:absolute after:right-0 after:top-0 after:w-[3px] after:h-[100%] after:bg-white bg-[#A3248E]";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const path = usePathname();

  const activeRoute = path.split("/")[2];

  return (
    <div className="w-[100%] px-4 text-white flex items-center">
      <div
        className="w-[fit-content] h-10 flex items-center lg:hidden"
        onClick={() => setShowMenu(true)}
      >
        <MenuOutlined className="text-[#990D81] " />
      </div>
      <div
        className={`w-[100%] md:w-[50%] lg:w-[300px] h-[100svh] fixed flex-col bg-[#990D81] top-0 left-0 p-4  lg:flex ${
          !showMenu ? "hidden" : "flex"
        }`}
      >
        <div className="flex flex-[1] items-center justify-center w-[100%] mt-8 pb-4 border-b-[0.5px] border-b-gray-300">
          <div className="h-[80px] w-[80px] bg-white">LOGO</div>
        </div>

        <div className="flex-[4] flex flex-col gap-4 mt-10">
          {navigationData.map((item) => (
            <Link
              href={item.path}
              className={`px-4 text-[14px] font-[400] flex item-center py-2 gap-4 rounded-md relative overflow-hidden first:text-white ${
                activeRoute === item.path ? activeStyle : ""
              }`}
              key={`navigation-${Math.random()}`}
            >
              {item.Icon}
              <span className="text-gray-300">{item.text}</span>
            </Link>
          ))}
        </div>
        <div className="flex-[1]">
          <div className="w-[90%] mx-auto p-4 rounded-md flex items-center gap-4 bg-[#A3248E]">
            <div className="w-[70px] h-[70px] rounded-full bg-gray-400" />
            <div>
              <span className="text-white text-[14px] font-[700]">
                Nafia Sh.
              </span>
              <span className="text-gray-300 text-[12px] font-[400]">
                Support manager
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
