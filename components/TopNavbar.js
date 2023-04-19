import React from "react";
import { FiMenu } from "react-icons/fi";

export default function TopNavbar({ title }) {
  return (
    <div className="w-full relative h-[100px] py-4 flex items-end">
      <button className="absolute left-0 px-4 py-2 flex items-center justify-start">
        <FiMenu size={25} />
      </button>
      <div className="flex w-full items-center justify-center">
        <h2 className="font-poppins text-[23px] font-bold">{title}</h2>
      </div>
    </div>
  );
}
