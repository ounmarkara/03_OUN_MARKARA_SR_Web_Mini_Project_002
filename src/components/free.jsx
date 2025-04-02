import {
  Bell,
  ChevronDown,
  ChevronRight,
  Grid,
  LogOut,
  Plus,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FreePage() {
  return (
    <div className="flex h-screen bg-[#f8fafc]">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-[#e2e8f0] flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-[#1e293b]">
            Plan<span className="text-[#009990]">It</span>
          </h1>
        </div>

        <div className="px-6 py-4 flex items-center justify-between">
          <h2 className="text-[#94a3b8] font-medium">Workspace</h2>
          <button className="text-[#94a3b8]">
            <Plus size={18} />
          </button>
        </div>

        <nav className="flex-1">
          <ul className="space-y-1 px-3">
            <li>
              <Link
                href="#"
                className="flex items-center px-3 py-2 rounded-md group hover:bg-[#f8fafc]"
              >
                <span className="w-2 h-2 rounded-full bg-[#f96666] mr-3"></span>
                <span className="flex-1 text-[#1e293b]">HRD Design</span>
                <button className="opacity-0 group-hover:opacity-100 text-[#94a3b8]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.5C8.82843 3.5 9.5 2.82843 9.5 2C9.5 1.17157 8.82843 0.5 8 0.5C7.17157 0.5 6.5 1.17157 6.5 2C6.5 2.82843 7.17157 3.5 8 3.5Z"
                      fill="#94a3b8"
                    />
                    <path
                      d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                      fill="#94a3b8"
                    />
                    <path
                      d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
                      fill="#94a3b8"
                    />
                  </svg>
                </button>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-3 py-2 rounded-md group hover:bg-[#f8fafc]"
              >
                <span className="w-2 h-2 rounded-full bg-[#4379f2] mr-3"></span>
                <span className="flex-1 text-[#1e293b]">Website Design</span>
                <button className="opacity-0 group-hover:opacity-100 text-[#94a3b8]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.5C8.82843 3.5 9.5 2.82843 9.5 2C9.5 1.17157 8.82843 0.5 8 0.5C7.17157 0.5 6.5 1.17157 6.5 2C6.5 2.82843 7.17157 3.5 8 3.5Z"
                      fill="#94a3b8"
                    />
                    <path
                      d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                      fill="#94a3b8"
                    />
                    <path
                      d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
                      fill="#94a3b8"
                    />
                  </svg>
                </button>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-3 py-2 rounded-md group hover:bg-[#f8fafc]"
              >
                <span className="w-2 h-2 rounded-full bg-[#009990] mr-3"></span>
                <span className="flex-1 text-[#1e293b]">Mobile Design</span>
                <button className="opacity-0 group-hover:opacity-100 text-[#94a3b8]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.5C8.82843 3.5 9.5 2.82843 9.5 2C9.5 1.17157 8.82843 0.5 8 0.5C7.17157 0.5 6.5 1.17157 6.5 2C6.5 2.82843 7.17157 3.5 8 3.5Z"
                      fill="#94a3b8"
                    />
                    <path
                      d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                      fill="#94a3b8"
                    />
                    <path
                      d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
                      fill="#94a3b8"
                    />
                  </svg>
                </button>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-3 py-2 rounded-md group hover:bg-[#f8fafc]"
              >
                <span className="w-2 h-2 rounded-full bg-[#b771e5] mr-3"></span>
                <span className="flex-1 text-[#1e293b]">Spring Boot</span>
                <button className="opacity-0 group-hover:opacity-100 text-[#94a3b8]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.5C8.82843 3.5 9.5 2.82843 9.5 2C9.5 1.17157 8.82843 0.5 8 0.5C7.17157 0.5 6.5 1.17157 6.5 2C6.5 2.82843 7.17157 3.5 8 3.5Z"
                      fill="#94a3b8"
                    />
                    <path
                      d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                      fill="#94a3b8"
                    />
                    <path
                      d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
                      fill="#94a3b8"
                    />
                  </svg>
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="px-6 py-4 flex items-center justify-between">
          <h2 className="text-[#94a3b8] font-medium">Favorite</h2>
          <button className="text-[#94a3b8]">
            <Star size={18} fill="none" />
          </button>
        </div>

        <nav className="mb-auto">
          <ul className="space-y-1 px-3">
            <li>
              <Link
                href="#"
                className="flex items-center px-3 py-2 rounded-md group hover:bg-[#f8fafc]"
              >
                <span className="w-2 h-2 rounded-full bg-[#f96666] mr-3"></span>
                <span className="flex-1 text-[#1e293b]">HRD Design</span>
                <button className="opacity-0 group-hover:opacity-100 text-[#94a3b8]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.5C8.82843 3.5 9.5 2.82843 9.5 2C9.5 1.17157 8.82843 0.5 8 0.5C7.17157 0.5 6.5 1.17157 6.5 2C6.5 2.82843 7.17157 3.5 8 3.5Z"
                      fill="#94a3b8"
                    />
                    <path
                      d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                      fill="#94a3b8"
                    />
                    <path
                      d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
                      fill="#94a3b8"
                    />
                  </svg>
                </button>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-3 py-2 rounded-md group hover:bg-[#f8fafc]"
              >
                <span className="w-2 h-2 rounded-full bg-[#4379f2] mr-3"></span>
                <span className="flex-1 text-[#1e293b]">Website Design</span>
                <button className="opacity-0 group-hover:opacity-100 text-[#94a3b8]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.5C8.82843 3.5 9.5 2.82843 9.5 2C9.5 1.17157 8.82843 0.5 8 0.5C7.17157 0.5 6.5 1.17157 6.5 2C6.5 2.82843 7.17157 3.5 8 3.5Z"
                      fill="#94a3b8"
                    />
                    <path
                      d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                      fill="#94a3b8"
                    />
                    <path
                      d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
                      fill="#94a3b8"
                    />
                  </svg>
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto p-6">
          <button className="flex items-center text-[#009990] hover:text-[#1e293b] transition-colors">
            <LogOut size={18} className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="h-16 border-b border-[#e2e8f0] bg-white flex items-center px-6 justify-between">
          <div className="flex items-center space-x-2">
            <Link href="#" className="text-[#94a3b8] hover:text-[#1e293b]">
              Workspace
            </Link>
            <ChevronRight size={16} className="text-[#94a3b8]" />
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
                  src="/placeholder.svg?height=32&width=32"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-medium">Monster</div>
                <div className="text-xs text-[#94a3b8]">
                  blackmonster@gmail.com
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Project Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-[#1e293b]">HRD Design</h1>
            <button className="text-[#94a3b8] hover:text-[#1e293b]">
              <Star size={20} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Not Started Column */}
            <div>
              <h2 className="text-[#f96666] font-medium mb-4 pb-2 border-b border-[#e2e8f0]">
                Not Started
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-lg border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Slack Integration</h3>
                      <button className="text-[#94a3b8]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 3.5C8.82843 3.5 9.5 2.82843 9.5 2C9.5 1.17157 8.82843 0.5 8 0.5C7.17157 0.5 6.5 1.17157 6.5 2C6.5 2.82843 7.17157 3.5 8 3.5Z"
                            fill="#94a3b8"
                          />
                          <path
                            d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                            fill="#94a3b8"
                          />
                          <path
                            d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
                            fill="#94a3b8"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-[#94a3b8] mb-4">
                      Add a field in the portal to let the user connect their
                      Slack account.
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#f8e7f8] text-[#b771e5]">
                        Development
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#f96666]"></div>
                    </div>
                  </div>

                  <div className="border-t border-[#e2e8f0] p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <button className="flex items-center text-[#f96666] text-sm font-medium">
                        Not Started
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                    </div>
                    <div className="flex items-center text-sm text-[#94a3b8]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                      >
                        <path
                          d="M8 3.5V8L10.5 10.5"
                          stroke="#94a3b8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                          stroke="#94a3b8"
                          strokeWidth="1.5"
                        />
                      </svg>
                      Tomorrow
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Mini Project 001</h3>
                      <button className="text-[#94a3b8]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 3.5C8.82843 3.5 9.5 2.82843 9.5 2C9.5 1.17157 8.82843 0.5 8 0.5C7.17157 0.5 6.5 1.17157 6.5 2C6.5 2.82843 7.17157 3.5 8 3.5Z"
                            fill="#94a3b8"
                          />
                          <path
                            d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                            fill="#94a3b8"
                          />
                          <path
                            d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
                            fill="#94a3b8"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-[#94a3b8] mb-4">
                      Add a field in the portal to let the user connect their
                      Slack account.
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#f8e7f8] text-[#b771e5]">
                        UX / UI Design
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#f96666]"></div>
                    </div>
                  </div>

                  <div className="border-t border-[#e2e8f0] p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <button className="flex items-center text-[#f96666] text-sm font-medium">
                        Not Started
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                    </div>
                    <div className="flex items-center text-sm text-[#94a3b8]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                      >
                        <path
                          d="M8 3.5V8L10.5 10.5"
                          stroke="#94a3b8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                          stroke="#94a3b8"
                          strokeWidth="1.5"
                        />
                      </svg>
                      Mar 03, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* In Progress Column */}
            <div>
              <h2 className="text-[#4379f2] font-medium mb-4 pb-2 border-b border-[#e2e8f0]">
                In Progress
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-lg border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">ReactJS Homework 003</h3>
                      <button className="text-[#94a3b8]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 3.5C8.82843 3.5 9.5 2.82843 9.5 2C9.5 1.17157 8.82843 0.5 8 0.5C7.17157 0.5 6.5 1.17157 6.5 2C6.5 2.82843 7.17157 3.5 8 3.5Z"
                            fill="#94a3b8"
                          />
                          <path
                            d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                            fill="#94a3b8"
                          />
                          <path
                            d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
                            fill="#94a3b8"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-[#94a3b8] mb-4">
                      Add a field in the portal to let the user connect their
                      Slack account.
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#e7f0fe] text-[#4379f2]">
                        Web Homework
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#4379f2]"></div>
                    </div>
                  </div>

                  <div className="border-t border-[#e2e8f0] p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <button className="flex items-center text-[#4379f2] text-sm font-medium">
                        In Progress
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                    </div>
                    <div className="flex items-center text-sm text-[#94a3b8]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                      >
                        <path
                          d="M8 3.5V8L10.5 10.5"
                          stroke="#94a3b8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                          stroke="#94a3b8"
                          strokeWidth="1.5"
                        />
                      </svg>
                      Mar 24, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Finished Column */}
            <div>
              <h2 className="text-[#009990] font-medium mb-4 pb-2 border-b border-[#e2e8f0]">
                Finished
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-lg border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Data Fetching</h3>
                      <button className="text-[#94a3b8]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 3.5C8.82843 3.5 9.5 2.82843 9.5 2C9.5 1.17157 8.82843 0.5 8 0.5C7.17157 0.5 6.5 1.17157 6.5 2C6.5 2.82843 7.17157 3.5 8 3.5Z"
                            fill="#94a3b8"
                          />
                          <path
                            d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                            fill="#94a3b8"
                          />
                          <path
                            d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
                            fill="#94a3b8"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-[#94a3b8] mb-4">
                      Add a field in the portal to let the user connect their
                      Slack account.
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#e7f0fe] text-[#4379f2]">
                        Web Homework
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#009990]"></div>
                    </div>
                  </div>

                  <div className="border-t border-[#e2e8f0] p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <button className="flex items-center text-[#009990] text-sm font-medium">
                        Finished
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                    </div>
                    <div className="flex items-center text-sm text-[#94a3b8]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                      >
                        <path
                          d="M8 3.5V8L10.5 10.5"
                          stroke="#94a3b8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                          stroke="#94a3b8"
                          strokeWidth="1.5"
                        />
                      </svg>
                      Mar 23, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="h-16 border-t border-[#e2e8f0] bg-white flex items-center px-6 justify-between">
          <div></div>
          <div className="flex items-center space-x-2">
            <button className="bg-[#4379f2] text-white rounded-full px-4 py-2 flex items-center">
              <Plus size={16} className="mr-1" />
              New Task
            </button>
            <button className="text-[#94a3b8] hover:text-[#1e293b] p-2">
              <Grid size={20} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
