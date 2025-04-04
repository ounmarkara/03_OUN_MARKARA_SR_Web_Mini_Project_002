// components/AddWorkspaceModal.jsx
"use client"; // Mark as a Client Component

import React, { useState } from "react";

const AddWorkspaceModal = ({ isOpen, onClose, onAddWorkspace }) => {
  const [workspaceName, setWorkspaceName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (workspaceName.trim() === "") {
      alert("Workspace name cannot be empty");
      return;
    }

    try {
      await onAddWorkspace(workspaceName); // Call the parent function to add the workspace
      setWorkspaceName(""); // Clear the input field
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error adding workspace:", error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Workspace</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Workspace Name
            </label>
            <input
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter workspace name"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWorkspaceModal;
