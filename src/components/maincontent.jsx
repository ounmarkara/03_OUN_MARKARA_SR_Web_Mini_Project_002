// components/MainContent.jsx
import React from "react";
import NotStarted from "./notStarted";
import InProgress from "./inprogress";
import Finished from "./finished";
import { getTaskAction } from "@/app/action/getTaskAction";

const MainContent = async ({ workspaceId }) => {
  try {
    // Validate input
    if (!workspaceId) {
      throw new Error("Workspace ID is missing");
    }

    // Fetch data
    const { payload: tasks = [] } = await getTaskAction(workspaceId);

    // Filter tasks
    const notStarted = tasks.filter((task) => task.status === "NOT_STARTED");
    const inProgress = tasks.filter((task) => task.status === "IN_PROGRESS");
    const finished = tasks.filter((task) => task.status === "FINISHED");

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NotStarted tasks={notStarted} />
        <InProgress tasks={inProgress} />
        <Finished tasks={finished} />
      </div>
    );
  } catch (error) {
    console.error("Error in MainContent:", error.message);
    return (
      <div className="p-4 border border-red-300 rounded-lg bg-red-50">
        <h3 className="text-red-700 font-bold">Error Loading Tasks</h3>
        <p className="text-red-600">{error.message}</p>
        {workspaceId && (
          <p className="text-sm mt-2">
            Workspace ID: <code>{workspaceId}</code>
          </p>
        )}
      </div>
    );
  }
};

export default MainContent;
