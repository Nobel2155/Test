"use client";
import React, { useState } from "react";
import Image from "next/image";
import userProfile from "@/assets/dashboard/profile-img.png";
import left from "@/assets/dashboard/leftFrame.png";
import right from "@/assets/dashboard/rightFrame.png";
import TableHead from "@/components/reservation/TableHead";
import TableRow from "@/components/reservation/TableRow";

function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen w-[1920px] gap-4 mx-auto flex mt-14">
      <aside
        className={`bg-white transition-all duration-300 ${
          isSidebarOpen ? "w-[220px]" : "w-0"
        }`}
      >
        <div className="flex flex-col h-full shadow-md border border-gray-100">
          <nav className={`mt-[15px] ${isSidebarOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col items-center">
              <Image
                className="w-14 h-14 rounded-full"
                src={userProfile}
                alt="User Profile"
              />
              <h2>Ahmed</h2>
              <span>sample@gmail.com</span>
            </div>
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-[#00703E] hover:text-white mb-1"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 bg-[#00703E] text-white"
            >
              Reservation
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`w-[1680px] mx-auto flex-1 flex flex-col transition-all duration-300`}>
        {/* Header */}
        <header className="py-4 px-2 flex items-center shadow">
          <Image
            className="p-1 w-10 focus:outline-none cursor-pointer"
            onClick={toggleSidebar}
            src={isSidebarOpen ? left : right}
            alt="Toggle Sidebar"
          />
          <h1 className="text-3xl font-semibold">Reservation</h1>
        </header>

        <main className="flex-1 p-6">
          <TableHead/>
          <div>
            <TableRow/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
