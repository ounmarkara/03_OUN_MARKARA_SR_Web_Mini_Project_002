// service/workspace/task.service.js
"use server";
import headerToken from "@/app/api/headerToken";

export const getTask = async (workspaceId) => {
  try {
    // Validate input
    if (!workspaceId) {
      throw new Error("Workspace ID is required");
    }

    // Get auth headers
    const headers = await headerToken();
    if (!headers?.Authorization) {
      throw new Error("Missing authorization token");
    }

    // Construct API URL
    const apiUrl = new URL(
      `http://96.9.81.187:8080/api/v1/tasks/workspace/${workspaceId}`
    );
    apiUrl.searchParams.append("pageNo", "0");
    apiUrl.searchParams.append("pageSize", "10");
    apiUrl.searchParams.append("sortBy", "taskId");
    apiUrl.searchParams.append("sortDirection", "ASC");

    // Make API call
    const response = await fetch(apiUrl.toString(), {
      headers,
      cache: "no-store",
    });

    // Handle errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `API Error ${response.status}: ${errorData.message || "Unknown error"}`
      );
    }

    // Return parsed data
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch tasks:", error.message);
    return { payload: [] }; // Return empty array on error
  }
};
