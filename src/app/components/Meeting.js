import { LuAlarmClock } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

const Meetings = () => {
  return (
    <div className="rounded-3xl bg-[#1b2c4f] px-5">
      <div className="flex items-center gap-3 mt-3">
        <FaLongArrowAltRight className="bg-blue-500 w-6 h-4 rounded-3xl " />
        <label className="font-light text-white">Upcoming Events</label>
      </div>

      <div className="flex items-center justify-around mt-5">
        <span className="border-2 border-[#9ed8d6] rounded-full p-1 ">
          <Image
            src={"/user1.png"}
            width={70}
            height={70}
            className="bg-[#9ed8d6] rounded-full"
            alt="user1"
          />
        </span>
        <div className="flex flex-col items-center">
          <p className="text-white text-2xl font-semibold">Aliza Shah</p>
          <p className="flex text-sm text-white items-center gap-3">
            <LuAlarmClock /> 08:00-09:00 am
          </p>
          <p className="text-sm px-5 py-2 mt-3 text-white bg-[#2c3a58] rounded-3xl">
            Visited 7 days ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
