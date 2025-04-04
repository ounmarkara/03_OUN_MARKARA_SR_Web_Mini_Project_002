// app/action/getTaskAction.js
"use server";

import { getTask } from "../../../service/workspace/task.service";

export const getTaskAction = async (workspaceId) => {
  try {
    if (!workspaceId) {
      throw new Error("No workspace ID provided");
    }
    return await getTask(workspaceId);
  } catch (error) {
    console.error("Error in getTaskAction:", error.message);
    return { payload: [] };
  }
};
