"use client";
import React from "react";
import Chat from "./Chat";
import Image from "next/image";
import useFormStore from "../store/FormDataStore";

const Profile = () => {
  const { email } = useFormStore();

  return (
    <div className=" bg-[#111729] rounded-3xl py-5 px-4 pb-10   flex flex-col justify-between items-center">
      <div className=" mt-7 relative rotate-45  h-28 w-28">
        <div className=" relative  h-28 w-28 flex justify-center items-center border-4 border-b-[#409BEE] border-t-[#151C39] border-l-[#409BEE] border-r-[#409BEE]   rounded-full">
          <div className="  rotate-180  relative">
            <div className="rotate-90 bg-[#bdd8f0]  w-20 h-20 overflow-hidden flex justify-center rounded-full">
              <Image
                src="/user.png"
                alt="prof_img"
                height={30}
                width={60}
                className="rotate-45"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 text-white flex flex-col items-center">
        <p className="text-xl font-semibold">Aliam Colter</p>
        <p className=" text-xs">Physician</p>
        <p className="text-xs">{email}</p>
      </div>

      <div className="text-white bg-[#1C2A4E] rounded-3xl w-full px-5 py-2 flex items-center justify-between">
        <div>
          <p className=" text-xs sm:text-sm">Active Patients</p>
        </div>
        <div className=" flex  items-center justify-end">
          <div className=" flex items-center justify-end  relative  w-28 sm:w-32  h-10  ">
            <div className="border border-gray-600 absolute left-4 bg-[#efabab] h-8 w-8 rounded-full flex justify-center items-center overflow-hidden">
              <Image src="/user1.png" width={30} height={30} alt="" />
            </div>
            <div className=" border border-gray-600 absolute left-10  bg-[#e8f8bb] h-8 w-8 rounded-full flex justify-center items-center overflow-hidden">
              <Image src="/Alexa.png" width={30} height={30} alt="" />
            </div>
            <div className=" border border-gray-600 absolute left-16 bg-[#bbf4f8] h-8 w-8 rounded-full flex justify-center items-center overflow-hidden">
              <Image src="/user2.png" width={30} height={30} alt="." />
            </div>
            <div className=" border border-gray-600  absolute right-[10px] text-black bg-white h-8 w-8 rounded-full flex justify-center items-center overflow-hidden">
              <p className="font-semibold">8+</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <Chat />
      </div>
    </div>
  );
};

export default Profile;
