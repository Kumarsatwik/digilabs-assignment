import Image from "next/image";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <main className=" bg-[#111729]  p-10 flex justify-start max-w-screen ">
      <Navbar />
      <Dashboard />
    </main>
  );
}
