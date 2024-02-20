import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { IoMicOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

const Chat = () => {
  return (
    <div className=" bg-[#1C2A4E] flex flex-col gap-3 sm:gap-1 mt-9 text-xs sm:text-sm sm:p-5  rounded-3xl">
      <div className=" flex w-full justify-between p-2 border-b border-gray-500 mb-3">
        <div className=" flex gap-2">
          <div className=" bg-[#e8f8bb] sm:w-12  sm:h-12 w-9 h-9 overflow-hidden flex justify-center rounded-full">
            <Image src="/Alexa.png" height={50} width={50} alt="image" />
          </div>
          <div className="text-white">
            <p className=" font-bold">Alexa Max</p>
            <p className=" text-xs">Active 5 min ago</p>
          </div>
        </div>
        <div className=" bg-[#2C3A58] sm:h-10 sm:w-10 w-9 h-9  flex justify-center items-center rounded-full text-[#409BEE]">
          <FaPhone />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-5  ">
        <div>
          <div className="  flex gap-2 ">
            <div className=" flex items-end justify-center">
              <div className=" bg-[#e8f8bb] sm:w-12  sm:h-12 w-9 h-9 overflow-hidden flex justify-center rounded-full">
                <Image src="/Alexa.png" height={50} width={50} alt="image" />
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="px-3 font-semibold bg-[#F1F1F1] w-28 text-xs  flex text-black rounded-lg p-1 ">
                Hi, Doctor.
              </div>

              <div className="px-3 font-semibold bg-[#F1F1F1] w-44 sm:w-48 text-xs text-black rounded-lg p-1 ">
                I got knee jerk. What should i do right now?
              </div>
            </div>
          </div>
          <div>
            <p className=" text-xs ml-14 mt-2 text-gray-300">Tue 02:32pm</p>
          </div>
        </div>

        <div>
          <div className=" flex gap-2">
            <div className="flex flex-col items-end gap-2">
              <div className="px-3 bg-[#bdd8f0] sm:w-48 text-black rounded-lg p-1 font-semibold">
                Hi, Alexa.
              </div>

              <div className="px-3 font-semibold bg-[#bdd8f0] text-xs  w-44 sm:w-56 text-black rounded-lg p-1 ">
                This help maintain balance and posture. dont worry.
              </div>
            </div>
            <div className=" flex items-start justify-center">
              <div className=" bg-[#bdd8f0] sm:w-12  sm:h-12 w-9 h-9 overflow-hidden flex justify-center rounded-full">
                <Image src="/user.png" width={50} height={50} alt="image" />
              </div>
            </div>
          </div>
          <div>
            <p className=" text-xs ml-36 mt-1 text-white mb-2">Tue 02:32pm</p>
          </div>
        </div>
      </div>

      <div className=" bg-[#2C3A58] flex px-3 py-2 items-center rounded-2xl">
        <IoMicOutline className="text-white w-8 h-8" />
        <input
          type="text"
          className="bg-transparent w-full h-full focus:outline-none pl-2"
          placeholder="Type your text......"
        />
        <div className="bg-[#409BEE] h-10 w-14  rounded-2xl flex items-center justify-center">
          <FiSend className=" text-white w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
