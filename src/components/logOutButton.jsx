"use client";

import React from "react";
import { LucideLogOut } from "lucide-react";
import { logoutAction } from "@/app/action/logoutAction";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await logoutAction();

      window.location.href = "/login";
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center text-[#009990] hover:text-[#1e293b] transition-colors w-full"
    >
      <LucideLogOut size={18} className="mr-2" />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
