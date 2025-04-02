import React from "react";
import Link from "next/link";
import { ArrowRight, Bell } from "lucide-react";
import Image from "next/image";

const Breadcrumb = () => {
  return (
    <header className="h-16 border-b border-[#e2e8f0] bg-white flex items-center px-6 justify-between">
      <div className="flex items-center space-x-2">
        <Link href="#" className="text-[#94a3b8] hover:text-[#1e293b]">
          Workspace
        </Link>
        <ArrowRight size={16} className="text-[#94a3b8]" />
        <Link href="#" className="text-[#4379f2]">
          HRD Design
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-[#94a3b8] hover:text-[#1e293b]">
          <Bell size={20} />
        </button>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#4379f2] mr-2 overflow-hidden">
            <Image
              src=""
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-medium">Monster</div>
            <div className="text-xs text-[#94a3b8]">blackmonster@gmail.com</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Breadcrumb;
