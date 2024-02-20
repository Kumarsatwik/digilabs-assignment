import Image from "next/image";
import { IoMdAlarm } from "react-icons/io";

const Activepatients = () => {
  return (
    <div className=" bg-[#1B2C4F] text-xs sm:text-sm rounded-3xl flex flex-col gap-2 p-2">
      <div className="flex items-center justify-around">
        <p className="text-xs text-gray-500">08:00 am</p>
        <div className=" flex items-center  relative h-14 text-gray-500">
          <div className="z-0 relative w-[250px] border border-dashed border-gray-500 " />

          <div className="absolute left-0 z-10 bg-[#f5e5e5] px-5 py-1 text-black flex items-center justify-around rounded-3xl">
            <Image
              src={"/mark.png"}
              width={35}
              height={35}
              className="bg-[#e8bbf8] border border-black rounded-full"
              alt="user1"
            />

            <div className="flex flex-col items-center text-black ml-2">
              <p className="text-lg font-semibold">Mark Jaxon</p>
              <p className="flex text-xs font-semibold items-center gap-1">
                <IoMdAlarm /> 08:00-09:00 am
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around">
        <p className="text-xs text-gray-500">09:00 am</p>
        <div className=" flex items-center  relative h-14 text-gray-500">
          <div className="z-0 relative w-[250px] border border-dashed border-gray-500 " />

          <div className="absolute right-0 z-10 bg-[#e5f5e6] px-5 py-0.5 text-black flex items-center justify-around rounded-3xl">
            <Image
              src={"/Maira.png"}
              width={35}
              height={35}
              className=" bg-[#bbf8f1] border border-black rounded-full"
              alt="user1"
            />

            <div className="flex flex-col items-center text-black ml-2">
              <p className="text-lg font-bold text-left">Maira Khan</p>
              <p className="flex text-xs font-semibold items-center gap-1">
                <IoMdAlarm /> 09:00-10:00 Am
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around">
        <p className="text-xs text-gray-500">10:00 am</p>
        <div className=" flex items-center  relative h-14 text-gray-500">
          <div className="z-0 relative w-[250px] border border-dashed border-gray-500 " />

          <div className="absolute left-0 z-10 bg-[#c9f3ec] px-5 py-0.5 text-black flex items-center justify-around rounded-3xl">
            <Image
              src={"/Bricks.png"}
              width={35}
              height={35}
              className="bg-[#cbf8bb] border border-black rounded-full"
              alt="user1"
            />

            <div className="flex flex-col items-center text-black ml-2">
              <p className="text-lg font-bold text-left">Brick Zon</p>
              <p className="flex text-xs font-semibold items-center gap-1">
                <IoMdAlarm /> 10:00-11:00 Am
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around">
        <p className="text-xs text-gray-500">11:00 am</p>
        <div className=" flex items-center  relative h-14 text-gray-500">
          <div className="z-0 relative w-[250px] border border-dashed border-gray-500 " />

          <div className="absolute left-16 z-10 bg-black px-5 py-2 text-black flex items-center justify-around rounded-3xl">
            <p className="text-xs text-white">Break Time</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around">
        <p className="text-xs text-gray-500">12:00 am</p>
        <div className=" flex items-center  relative h-14 text-gray-500">
          <div className="z-0 relative w-[250px] border border-dashed border-gray-500 " />

          <div className="absolute right-3 z-10 bg-[#c1e2f4] px-5 py-0.5 text-black flex items-center justify-around rounded-3xl">
            <Image
              src={"/Alexa.png"}
              width={35}
              height={35}
              className="bg-[#e8f8bb] border border-black rounded-full"
              alt="user1"
            />

            <div className="flex flex-col items-center text-black ml-2">
              <p className="text-lg font-bold text-left">Alexa Max</p>
              <p className="flex text-xs font-semibold items-center gap-1">
                <IoMdAlarm /> 12:00-13:00 Am
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activepatients;
