import { FaArrowTrendUp } from "react-icons/fa6";

const PatientVisited = () => {
  return (
    <div className="rounded-3xl bg-[#1b2c4f] grid grid-cols-2 ">
      <div className="text-white flex flex-col items-start justify-center px-5">
        <p className="text-white text-3xl font-bold mb-2">42</p>
        <p className="font-semibold text-lg ">Patients Visited</p>
        <p className="text-xs">This month</p>
      </div>

      <div className="bg-[#2c3a58] rounded-r-3xl flex items-center justify-center">
        {/* <FaArrowTrendUp /> */}

        <div class="w-[45px] h-[80px] bg-[#366aa3] rounded-3xl flex items-end justify-center">
          <div class=" flex flex-col items-center bg-[#409bee] rounded-b-3xl w-full h-[70%]">
            <FaArrowTrendUp className="text-white" />
            <p class="text-white">70%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientVisited;
