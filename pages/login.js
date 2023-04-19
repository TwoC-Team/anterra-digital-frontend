import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import LogoHorizontal from "../public/assets/images/logo-horizontal.png";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import { FiUser } from "react-icons/fi";
import { RiKey2Line } from "react-icons/ri";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import Link from "next/link";

export default function Login() {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-screen sm:max-w-[430px] w-full  mx-auto">
      <div className="w-full h-full flex items-center justify-center px-8 py-4 bg-[url('../public/assets/images/Login.png')] bg-cover bg-center bg-no-repeat  ">
        <div className="bg-gradient-to-br  from-[#B379DF]/20 from-0% via-[#CC5854]/10 via-70% to-[#B379DF]/20 to-100% rounded-[8px] backdrop-blur-sm px-[32px] py-[46px] w-full flex flex-col items-center justify-center space-y-4">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-center">
              <Image
                width={320}
                height={80}
                alt={"Horizontal Logo"}
                src={LogoHorizontal}
              />
            </div>
            <div className="w-[80%]">
              <p className="text-center font-poppins font-medium text-[#A4A4A4] text-[14px]">
                Instan swap, Jual beli crypto Dengan Fee yang sangat murah
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-4 select-none">
            <div className="w-full flex flex-col space-y-[12px]">
              <label className="font-poppins text-[15px] font-medium text-[#A4A4A4]">
                Username
              </label>
              <div className="flex items-center focus:outline-2 justify-center rounded-[8px] bg-gradient-to-r from-white/20 to-transparent bg-transparent border border-gray-400">
                <span className="text-[#A4A4A4]  px-4">
                  <FiUser size={25} />
                </span>
                <input
                  placeholder="Email"
                  className="py-[12px] px-[20px] outline-none text-white w-full text-[14px]  bg-transparent "
                />
              </div>
            </div>
            <div className="w-full flex flex-col space-y-[12px]">
              <label className="font-poppins text-[15px] font-medium text-[#A4A4A4]">
                Password
              </label>
              <div className="flex  items-center justify-center rounded-[8px] bg-gradient-to-r from-white/20 to-transparent bg-transparent border border-gray-400">
                <span className="text-[#A4A4A4]  px-4">
                  <RiKey2Line size={25} />
                </span>
                <input
                  placeholder="********"
                  className="py-[12px] outline-none text-white px-[20px] text-[14px]  bg-transparent w-full "
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="text-[#A4A4A4] hover:text-white transition ease-linear duration-300 px-4"
                >
                  {!show ? <VscEyeClosed size={25} /> : <VscEye size={25} />}
                </button>
              </div>
            </div>
            <Link
              href={"#"}
              className="w-full  hover:text-white transition ease-linear duration-300 flex items-end justify-end text-[12px] text-[#A4A4A4] font-poppins"
            >
              <p>Forgot Password ?</p>
            </Link>
            <button className="bg-gradient-to-r w-full py-[12px] text-center rounded-[16px] from-[#9C3FE4] to-[#C65647]">
              <p className="text-white font-poppins text-[18px]">Sign In</p>
            </button>
            <div className="w-full flex space-x-2 items-center justify-center text-[12px] text-[#A4A4A4] font-poppins">
              <p>Belum Punya Akun ? </p>
              <Link
                className=" hover:text-white transition ease-linear duration-300"
                href="/register"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
