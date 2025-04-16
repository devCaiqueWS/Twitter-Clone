import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black text-white">

      <Sidebar />

      <Feed />

      <Widgets />
      
    </div>
  );
}
