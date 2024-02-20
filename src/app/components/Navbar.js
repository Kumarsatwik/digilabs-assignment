import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between  w-16 h-[804px] max-md:hidden">
      <div className="flex flex-col h-[50%] justify-between items-center">
        <span>
          <Image src="/logo.png" alt="logo" width={40} height={40} />
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