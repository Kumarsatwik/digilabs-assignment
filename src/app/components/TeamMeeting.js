import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosNotifications, IoMdAlarm } from "react-icons/io";

const TeamMeeting = () => {
  return (
    <div className=" bg-[#1B2C4F] p-5  flex flex-col  gap-2 rounded-3xl">
      <div className=" flex justify-between">
        <div>
          <div>
            <p className=" text-white font-bold text-xl">Team Meeting</p>
          </div>
          <div className="text-white flex text-xs items-center gap-1">
            <IoMdAlarm />
            <p>05:00-06:00</p>
          </div>
        </div>
        <div className=" bg-[#2C3A58] h-14 w-14 flex items-center justify-center relative rounded-2xl">
          <IoIosNotifications className=" text-3xl text-[#409BEE]" />
        </div>
      </div>
      <div className=" flex justify-between">
        <div>
          <div className=" flex relative w-40 h-10  ">
            <div className="border border-gray-600 absolute bg-[#E8BBF8] h-10 w-10 rounded-full flex justify-center items-center overflow-hidden">
              <Image src="/mark.png" width={30} height={30} alt="" />
            </div>
            <div className=" border border-gray-600 absolute left-7  bg-[#BBF8F1] h-10 w-10 rounded-full flex justify-center items-center overflow-hidden">
              <Image src="/Maira.png" width={30} height={30} alt="" />
            </div>
            <div className=" border border-gray-600 absolute left-14 bg-[#CBF8BB] h-10 w-10 rounded-full flex justify-center items-center overflow-hidden">
              <Image src="/Bricks.png" height={30} width={30} alt="" />
            </div>
            <div className=" border border-gray-600  absolute left-20 text-black bg-white h-10 w-10 rounded-full flex justify-center items-center overflow-hidden">
              <p>4+</p>
            </div>
          </div>
        </div>
        <div className=" bg-[#409BEE] text-black w-14 h-10 flex justify-center items-center p-1 rounded-xl">
          <FaArrowRight className=" text-xl" />
        </div>
      </div>
    </div>
  );
};

export default TeamMeeting;
