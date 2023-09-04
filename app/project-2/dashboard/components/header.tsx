import {
  NotificationOutlined,
  SearchOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white p-5 md:flex md:items-center md:gap-4">
      <div className="text-[18px] font-[700] md:text-[24px] lg:text-[32px] pl-4 md:flex-[1]">
        Dashboard
      </div>
      <div className="md:flex-[2] lg:flex-[1] flex gap-4">
        <div className="flex flex-[1] lg:flex-[2] w-[100%] text-gray-400 bg-[#FAFAFA] px-4 ">
          <SearchOutlined className="text-gray-400" width={24} height={24} />
          <input
            className="bg-transparent outline-none text-[14px] md:text-[18px] text-gray-600 px-4 py-2 w-[100%] placeholder:font-light"
            placeholder="Enter keyword"
          />
        </div>
        <div className="flex-[1] hidden lg:flex justify-between gap-2 xl:justify-evenly">
          <div className="w-[50px] h-[50px] rounded-full bg-[#FAFAFA] flex items-center justify-center">
            <NotificationOutlined className="text-gray-400" />
          </div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#FAFAFA] flex items-center justify-center">
            <BulbOutlined className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
