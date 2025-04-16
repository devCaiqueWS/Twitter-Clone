import { Home, Bell, Mail, Hash, User, List, MoreHorizontal, Bird } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-start p-4 h-screen bg-black text-white w-64">
      {/* Logo */}
      <div className="mb-8">
        <Bird />
        <h1 className="text-3xl font-bold">Piu</h1>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col space-y-4">
        <SidebarItem Icon={Home} title="Home" />
        <SidebarItem Icon={Hash} title="Explore" />
        <SidebarItem Icon={Bell} title="Notifications" />
        <SidebarItem Icon={Mail} title="Messages" />
        <SidebarItem Icon={List} title="Lists" />
        <SidebarItem Icon={User} title="Profile" />
        <SidebarItem Icon={MoreHorizontal} title="More" />
      </div>

      {/* Button */}
      <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-full w-full hover:bg-blue-600">
        Tweet
      </button>
    </div>
  );
}

function SidebarItem({ Icon, title }: { Icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center space-x-4 hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
      <Icon className="h-6 w-6" />
      <span className="text-lg">{title}</span>
    </div>
  );
}