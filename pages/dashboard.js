import React, { useState } from "react";
import TopNavbar from "@/components/TopNavbar";
import BtcLogo from "../public/assets/images/btc.png";
import EthLogo from "../public/assets/images/eth.png";
import LtcLogo from "../public/assets/images/ltc.png";
import DogeLogo from "../public/assets/images/doge.png";
import NanoLogo from "../public/assets/images/nano.png";
import TrxLogo from "../public/assets/images/trx.png";
import CakeLogo from "../public/assets/images/cake.png";
import BnbLogo from "../public/assets/images/bnb.png";
import FlokiLogo from "../public/assets/images/floki.png";
import FeyLogo from "../public/assets/images/fey.png";
import SolLogo from "../public/assets/images/fey.png";
import MaticLogo from "../public/assets/images/matic.png";
import BttLogo from "../public/assets/images/btt.png";
import Image from "next/image";
import BottomNavbar from "@/components/BottomNavbar";

export default function Dashboard() {
  const [show, setShow] = useState(false);

  const currency = [
    {
      name: "Bitcoin",
      price: "$30,271.83",
      ballance: "0.00000000",
    },
    {
      name: "Ethereum",
      price: "$30,271.83",
      ballance: "0.00000000",
    },
    {
      name: "Litecoin",
      price: "$30,271.83",
      ballance: "0.00000000",
    },
    {
      name: "Dogecoin",
      price: "$30,271.83",
      ballance: "0.00000000",
    },
    {
      name: "Nanocoin",
      price: "$30,271.83",
      ballance: "0.00000000",
    },
    {
      name: "Tron",
      price: "$30,271.83",
      ballance: "0.00000000",
    },
    {
      name: "Cake",
      price: "$30,271.83",
      ballance: "0.00000000",
    },
    {
      name: "Bnb",
      price: "$30,271.83",
      ballance: "0.00000000",
    },
    {
      name: "Floki",
      price: "$30,271.83",
      ballance: "0.00000000",
    },
    {
      name: "Sol",
      price: "$30,271.83",
      ballance: "0.00000000",
    },
    {
      name: "Matic",
      price: "$30,271.83",
      ballance: "0.00000000",
    },
    {
      name: "Btt",
      price: "$30,271.83",
      ballance: "0.00000000",
    },
  ];
  const CurrencyIcons = (name) => {
    if (name.toLowerCase() === "bitcoin") return BtcLogo;
    if (name.toLowerCase() === "ethereum") return EthLogo;
    if (name.toLowerCase() === "litecoin") return LtcLogo;
    if (name.toLowerCase() === "dogecoin") return DogeLogo;
    if (name.toLowerCase() === "nanocoin") return NanoLogo;
    if (name.toLowerCase() === "tron") return TrxLogo;
    if (name.toLowerCase() === "cake") return CakeLogo;
    if (name.toLowerCase() === "bnb") return BnbLogo;
    if (name.toLowerCase() === "floki") return FlokiLogo;
    if (name.toLowerCase() === "sol") return SolLogo;
    if (name.toLowerCase() === "matic") return MaticLogo;
    if (name.toLowerCase() === "btt") return BttLogo;
  };
  return (
    <div className="w-full h-screen sm:max-w-[430px]  mx-auto">
      <div className="bg-white flex flex-col  justify-center px-[28px]">
        <div className="w-full h-full shadow-[0_1px_1px_0_rgba(0,0,0,0.1)]">
          <TopNavbar title={"Dashboard"} />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col justify-center px-4 py-2 rounded-[10px] bg-gradient-to-br from-[#9381FF]/75 from-20% to-[#6D54FF] to-80%">
            <p className="text-[14px] font-poppins font-medium text-white">
              Volume Transaction
            </p>
            <h2 className="text-[23px] font-poppins font-medium text-white">
              $16907.51
            </h2>
            <p className="text-[14px] font-poppins font-medium text-white">
              $8.05
            </p>
          </div>
          <div className="border-2 border-[#7D67FF] px-4 py-2 rounded-[10px]">
            <p className="text-[14px] font-poppins font-medium text-[#9381FF]">
              Total Transaction
            </p>
            <h2 className="text-[23px] font-poppins font-medium text-[#9381FF]">
              13053
            </h2>
          </div>
        </div>
        <div className="my-4 px-[8px] w-full h-full">
          <h2 className="font-poppins font-bold text-[23px]">Wallets</h2>
          <div className="grid grid-cols-1 gap-4 w-full">
            {currency.map((val, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-[16px] px-[16px]  shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] rounded-[8px] select-none"
              >
                <div className="w-full flex items-center justify-center space-x-[14px]">
                  <div>
                    <Image
                      height={50}
                      width={50}
                      src={CurrencyIcons(val.name)}
                      alt={val.name}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <h2 className="font-poppins font-medium text-[20px] capitalize">
                      {val.name}
                    </h2>
                    <p className="font-poppins font-medium text-[13px] text-[#616161]">
                      {val.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full">
                  <h2 className="font-poppins font-medium text-[20px] text-[#616161]">
                    {val.ballance}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
}
