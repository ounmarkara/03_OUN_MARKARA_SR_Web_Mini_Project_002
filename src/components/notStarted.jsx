import { ArrowDown } from "lucide-react";
import React from "react";
import CardComponent from "./card";

const NotStarted = () => {
  return (
    <div>
      <h2 className="text-[#f96666] font-medium mb-4 pb-2 border-b border-[#e2e8f0]">
        Not Started
      </h2>

      <CardComponent />
    </div>
  );
};

export default NotStarted;
