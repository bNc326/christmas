import { Divider } from "@mui/material";
import useCountdown from "../hook/useCountdown";
import React from "react";
import christmas from "../../assets/image/png/christmas.webp";

const Countdown: React.FC<{
  targetDate: Date;
}> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <>
      {days + hours + minutes + seconds > 0 && (
        <div className="w-full flex flex-col gap-4">
          <div className={`w-full  flex justify-center  rounded-lg`}>
            <div className="w-full max-w-[400px] flex items-center gap-4 p-2 text-white">
              <CountDownItem count={days} label="Nap" isHighlighted />
              <CountDownItem count={hours} label="Óra" />
              <CountDownItem count={minutes} label="Perc" />
              <CountDownItem count={seconds} label="mp" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Countdown;

interface ItemProps {
  count: number;
  label: string;
  isHighlighted?: boolean;
}

const CountDownItem: React.FC<ItemProps> = ({
  count,
  label,
  isHighlighted,
}) => {
  return (
    <div
      className={`w-full h-full flex flex-col items-center overflow-hidden bg-white/10 p-2 rounded-md`}
    >
      <span className={`text-dynamicTitle2 font-black`}>{count}</span>
      <span className={`text-dynamicList uppercase`}>{label}</span>
    </div>
  );
};
