// pages/api/getTasks.js

import { getTask } from "../../service/workspace/task.service";

export default async function handler(req, res) {
  try {
    // Fetch tasks using the getTask function
    const taskData = await getTask();

    // Return the fetched tasks as JSON
    res.status(200).json({ success: true, data: taskData });
  } catch (error) {
    // Handle errors and return an error response
    res.status(500).json({ success: false, message: "Failed to fetch tasks" });
  }
}
