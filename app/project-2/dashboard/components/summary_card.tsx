import { RiseOutlined } from "@ant-design/icons";

const SummaryCard = ({
  value,
  text,
  Icon,
  iconBg,
  iconColor,
  info,
  infoColor,
}: {
  value: number;
  text: string;
  Icon: JSX.Element;
  iconBg: string;
  iconColor: string;
  infoColor: string;
  info: string;
}) => {
  return (
    <div className="px-8 py-4 rounded-md bg-white flex w-[100%] gap-4 drop-shadow-[0_15px_15px_rgba(0,0,0,0.05)] hover:scale-[1.1]">
      <div
        className="flex items-center justify-center w-[60px] h-[60px] rounded-full"
        style={{ backgroundColor: iconBg }}
      >
        <div className={`transfirm scale-150`} style={{ color: iconColor }}>
          {Icon}
        </div>
      </div>
      <div>
        <span className="text-[20px] xl:text-[24px] font-[500]">
          {value?.toLocaleString("en-US") || 0}
        </span>
        <span className="text-[14px] xl:text-[16px] font-[300] text-gray-400 mb-5">
          {text}
        </span>
        <div className="flex gap-4 font-[300] text-[12px] xl:text-[14px] text-gray-400">
          <div className="flex gap-2" style={{ color: infoColor }}>
            <RiseOutlined width={24} height={24} /> <span>{info}</span>
          </div>
          <span>Last month</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
