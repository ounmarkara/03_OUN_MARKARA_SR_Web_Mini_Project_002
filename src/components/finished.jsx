import { ArrowDown } from "lucide-react";
import React from "react";
import CardComponent from "./card";

const Finished = () => {
  return (
    <div>
      <h2 className="text-[#009990] font-medium mb-4 pb-2 border-b border-[#e2e8f0]">
        Finished
      </h2>

      <CardComponent />
    </div>
  );
};

export default Finished;
