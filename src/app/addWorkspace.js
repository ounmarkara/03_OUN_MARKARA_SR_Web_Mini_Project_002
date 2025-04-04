// pages/api/addWorkspace.js
import { postWorkspace } from "@/service/workspace/workspace.service";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { workspaceName } = req.body;

    if (!workspaceName || workspaceName.trim() === "") {
      return res
        .status(400)
        .json({ success: false, message: "Workspace name is required" });
    }

    // Call the service function to add the workspace
    const result = await postWorkspace({ workspaceName });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("Error adding workspace:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to add workspace" });
  }
}
