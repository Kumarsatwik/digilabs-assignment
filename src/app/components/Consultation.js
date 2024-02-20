import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";

const Consultation = () => {
  return (
    <div className=" mt-5 text-white bg-[#1B2C4F] p-5 flex flex-col justify-between rounded-3xl">
      <div className=" flex flex-col gap-3">
        <div className=" flex justify-between w-full">
          <div>
            <p className=" text-sm mb-2">Consultation</p>
            <p className=" text-2xl font-bold">82/100</p>
          </div>
          <div className=" text-2xl text-black">
            <IoIosMore className="w-10 h-10" />
          </div>
        </div>
      </div>
      <div className=" flex  items-end justify-between">
        <div className="bg-[#2C3A58] w-28 rounded-xl h-8 flex items-center justify-around ">
          <p className="text-xl font-bold">82%</p>
          <FaArrowTrendUp />
        </div>

        <div className=" border-[12px] border-t-white border-b-[#409BEE] border-l-[#409BEE] border-r-[#409BEE] rotate-45 h-16 w-16 rounded-full"></div>
      </div>
    </div>
  );
};

export default Consultation;
