import { ArrowDown } from "lucide-react";
import React from "react";
import CardComponent from "./card";

const InProgress = () => {
  return (
    <div>
      <h2 className="text-[#4379f2] font-medium mb-4 pb-2 border-b border-[#e2e8f0]">
        In Progress
      </h2>

      <CardComponent />
    </div>
  );
};

export default InProgress;
