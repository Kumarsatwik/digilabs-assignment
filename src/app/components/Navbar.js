"use client";
import Image from "next/image";
import { useState } from "react";
import Form from "./Form";
import useFormStore from "../store/FormDataStore";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);

  const { name, email, image } = useFormStore();
  console.log(image);

  return (
    <div className="flex flex-col justify-between  w-16 h-[804px] max-md:hidden">
      <div className="flex flex-col h-[50%] justify-between items-center">
        <span>
          <Image
            src={image ? URL.createObjectURL(image) : "/logo.png"}
            alt="logo"
            width={40}
            height={40}
          />
        </span>

        <div className="flex flex-col gap-3">
          <div className="p-3 rounded-2xl transition duration-500 ease-in-out cursor-pointer hover:bg-[#2c3a58]">
            <Image src="/home.png" alt="logo" width={20} height={20} />
          </div>

          <div className="p-3 rounded-2xl transition duration-500 ease-in-out cursor-pointer hover:bg-[#2c3a58]">
            <Image src="/file.png" alt="logo" width={20} height={20} />
          </div>

          <div className="p-3 rounded-2xl transition duration-500 ease-in-out cursor-pointer hover:bg-[#2c3a58]">
            <Image src="/slice.png" alt="logo" width={20} height={20} />
          </div>

          <div className="p-3 rounded-2xl transition duration-500 ease-in-out cursor-pointer hover:bg-[#2c3a58]">
            <Image src="/message.png" alt="logo" width={20} height={20} />
          </div>

          <div className="p-3 rounded-2xl transition duration-500 ease-in-out cursor-pointer hover:bg-[#2c3a58]">
            <Image src="/setting.png" alt="logo" width={20} height={20} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 mb-4 ">
        <div
          className="p-1 cursor-pointer "
          onClick={() => setShowForm(!showForm)}
        >
          <p className="text-white text-medium font-semibold">Form</p>
        </div>

        {showForm && <Form showForm={showForm} setShowForm={setShowForm} />}

        <div className="p-1 cursor-pointer bg-[#bdd8f0] rounded-full ">
          <Image src="/user.png" width={35} height={25} alt="@logo" />
        </div>

        <div className="p-3 rounded-2xl transition duration-500 ease-in-out cursor-pointer hover:bg-[#2c3a58]">
          <Image src="/logout.png" alt="logo" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
