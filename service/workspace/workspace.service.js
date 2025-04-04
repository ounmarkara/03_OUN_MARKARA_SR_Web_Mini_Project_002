// workspace.service.js
import headerToken from "@/app/api/headerToken";

export const getAllWorkSpace = async () => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${process.env.NEXT_APIURL}/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
      {
        headers: header,
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch workspaces");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching workspaces:", error.message);
    throw error;
  }
};

export const getAllWorkSpacebyId = async (workspaceId) => {
  const header = await headerToken();
  const res = await fetch(
    `${process.env.NEXT_APIURL}/workspace/${workspaceId}`,
    {
      headers: header,
    }
  );
  const data = await res.json();
  return data;
};

export const postWorkspace = async (workspaceData) => {
  try {
    // Get the tokenized header
    const header = await headerToken();

    // Call the external API to add the workspace
    const res = await fetch("http://96.9.81.187:8080/api/v1/workspace", {
      method: "POST",
      headers: {
        ...header,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workspaceData), // Send the workspace data in the request body
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(
        `API Error ${res.status}: ${errorData.message || "Unknown error"}`
      );
    }

    const data = await res.json();
    return data; // Return the response data
  } catch (error) {
    console.error("Error posting workspace:", error.message);
    throw error;
  }
};
