import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { MdWavingHand } from "react-icons/md";
const SearchBar = () => {
  return (
    <div className="flex items-center gap-5 mb-5">
      <div className="text-white text-3xl leading-snug">
        <p className="font-light">Hello,</p>
        <p className="font-bold">
          Dr. Colter! <MdWavingHand className="inline w-5 h-5 text-[#d9cb87]" />
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <FiSearch className="absolute top-3.5 left-5 text-white text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="pl-12 outline-none w-[20vw] bg-[#2c3a58] text-white rounded-2xl p-3"
          />
        </div>
        <button className="p-3 rounded-2xl bg-blue-500 relative ml-2">
          <div className="bg-red-500 rounded-full h-2 w-2 absolute left-6" />
          <GoBell className="text-white h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
