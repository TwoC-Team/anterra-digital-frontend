import Image from "next/image";
import React from "react";
import DashIcon from "../public/assets/images/antera-digital-putih.png";
import {
  FaLandmark,
  FaUser,
  FaUserTag,
  FaBalanceScaleRight,
} from "react-icons/fa";
export default function BottomNavbar() {
  const data = [
    { name: "market" },
    { name: "swap" },
    { name: "dashboard" },
    { name: "redeem" },
    { name: "profile" },
  ];
  const Icons = ({ name }) => {
    if (name.toLowerCase() === "market") return <FaLandmark size={25} />;
    if (name.toLowerCase() === "swap") return <FaBalanceScaleRight size={25} />;
    if (name.toLowerCase() === "dashboard")
      return (
        <Image width={80} height={40} alt="Dashboard Icon" src={DashIcon} />
      );
    if (name.toLowerCase() === "redeem") return <FaUserTag size={25} />;
    if (name.toLowerCase() === "profile") return <FaUser size={25} />;
  };
  return (
    <div className="fixed bottom-0 w-full max-w-[430px]">
      <div className="w-full bg-white flex items-center justify-around shadow-[0_-1px_1px_0_rgba(0,0,0,0.25)] relative">
        {data.map((val, i) => (
          <button
            key={i}
            className="flex flex-col items-center justify-center py-[18px] w-full select-none  rounded-full hover:bg-gray-200"
          >
            <div
              className={`text-[#7861FF]  ${
                val.name === "dashboard" &&
                "bg-gradient-to-br from-[#7043CF] to-[#818EFF] to-50% py-[26px] absolute px-[8px] rounded-full mb-8"
              }`}
            >
              <Icons name={val.name} />
            </div>
            <div className={`font-poppins text-[12px] text-[#7861FF]`}>
              {val.name !== "dashboard" ? val.name : ""}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
