"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";
import Image from "next/image";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const salesData = [
  { month: "January", sales: 10 },
  { month: "February", sales: 50 },
  { month: "March", sales: 24 },
  { month: "April", sales: 52 },
  { month: "May", sales: 30 },
  { month: "June", sales: 60 },
];
const Statistics = () => {
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "",
        data: salesData.map((data) => data.sales),
        borderColor: "#fff",
        borderWidth: 3,
        pointBorderColor: "fff",
        pointBorderWidth: 3,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
  };

  return (
    <div className="rounded-3xl bg-[#1b2c4f] h-[295px] p-5">
      <div className="text-white flex items-center justify-between">
        <span>
          <p className="text-3xl font-bold">Statistics</p>
          <p className="text-sm">November 2023</p>
        </span>
        <select className="bg-[#1b2c4f] border border-blue-500 px-3 py-2 rounded-3xl outline-none text-sm">
          <option value="">Weekly</option>
          <option value="">Monthly</option>
          <option value="">Yearly</option>
        </select>
      </div>
      <div className="relative">
        <Line
          data={data}
          options={options}
          width={350}
          height={200}
          className=" z-99"
        ></Line>
        {/* <Image
          src="/gradient.png"
          width={350}
          height={250}
          alt="gradient"
          className="absolute top-1 opacity-65 z-0"
        /> */}
      </div>
    </div>
  );
};

export default Statistics;
