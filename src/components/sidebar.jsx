"use client";
import React from "react";
import Logo from "./logo";
import { LogOut, LucideLogOut, Star } from "lucide-react";
import { getAllWorkSpace } from "../../service/book/workspace.service";

const Sidebar = async () => {
  const { payload: workspace } = await getAllWorkSpace();
  console.log("data", workspace);

  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <Logo />

      <div className="flex flex-col gap-[76px] flex-1 mt-6">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-[#94A3B8] dark:text-white">
              Workspace
            </h2>
            <button className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 border rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>

          <nav className="mt-4 -mx-3 space-y-3 h-45 overflow-y-auto ">
            {workspace.map((data) => (
              <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <div className="flex items-center gap-x-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>{data.workspaceName}</span>
                  <div>{data?.workspaceName}</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            ))}
            {/* Add other project buttons similarly */}
          </nav>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-[#94A3B8] dark:text-white">
              Favorite
            </h2>
            <button className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 border rounded-lg">
              <Star className="text-[#94A3B8]" />
            </button>
          </div>

          <nav className="mt-4 -mx-3 space-y-3">
            <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
              <div className="flex items-center gap-x-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span>Meraki UI Components</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            {/* Add other project buttons similarly */}
          </nav>
        </div>

        {/* logout */}
        <div className="mt-auto p-6">
          <button className="flex items-center text-[#009990] hover:text-[#1e293b] transition-colors">
            <LucideLogOut size={18} className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
