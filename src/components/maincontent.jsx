import React from "react";
import NotStarted from "./notStarted";
import InProgress from "./inprogress";
import Finished from "./finished";

const MainContent = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <NotStarted />
      <InProgress />
      <Finished />
    </div>
  );
};

export default MainContent;
