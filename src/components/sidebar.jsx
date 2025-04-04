// components/Sidebar.jsx
"use client"; // Mark as a Client Component
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { Ellipsis, Star } from "lucide-react";
import LogoutButton from "./logOutButton";
import { usePathname } from "next/navigation";
import AddWorkspaceModal from "./AddWorkspaceButton";

const Sidebar = ({ workspace = [] }) => {
  const path = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const NormalWorkspace = workspace.filter((wk) => !wk.isFavorite);
  const FavouriteWorkSpace = workspace.filter((wk) => wk.isFavorite);

  const getHashFromName = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      const char = name.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  };

  const getColorFromName = (name) => {
    const hash = getHashFromName(name);
    const hue = hash % 360;
    const saturation = 70;
    const lightness = 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const handleAddWorkspace = async (workspaceName) => {
    try {
      // Call the API route to add the workspace
      const response = await fetch("/api/addWorkspace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ workspaceName }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to add workspace");
      }

      // Optionally refetch workspaces or update the UI
      window.location.reload(); // Simple reload to refresh the workspace list
    } catch (error) {
      console.error("Error during workspace addition:", error.message);
    }
  };

  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <Logo />

      <div className="flex flex-col gap-[76px] flex-1 mt-6">
        {/* Normal Workspace Section */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-[#94A3B8] dark:text-white">
              Workspace
            </h2>
            <button
              onClick={() => setIsModalOpen(true)} // Open the modal
              className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 border rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>

          <nav className="mt-4 -mx-3 space-y-3 h-45 overflow-y-auto ">
            {NormalWorkspace.map((data) => {
              const workspaceColor = getColorFromName(data.workspaceName);
              const isActive = `/workspace/${data.workspaceId}` === path;

              return (
                <Link
                  key={data.workspaceId}
                  href={`/workspace/${data.workspaceId}`}
                  className={`flex items-center justify-between w-full px-3 py-2 text-xs font-medium transition-colors duration-300 transform rounded-lg ${
                    isActive
                      ? "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-x-2">
                    <span
                      style={{ backgroundColor: workspaceColor }}
                      className="w-2 h-2 rounded-full"
                    ></span>
                    <div>{data?.workspaceName}</div>
                  </div>
                  <Ellipsis />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Favorite Section */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-[#94A3B8] dark:text-white">
              Favorite
            </h2>
            <button className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 border rounded-lg">
              <Star className="text-[#94A3B8]" />
            </button>
          </div>

          <nav className="mt-4 -mx-3 space-y-3">
            {FavouriteWorkSpace.length > 0 ? (
              FavouriteWorkSpace.map((favorite) => {
                const favoriteColor = getColorFromName(favorite.workspaceName);
                const isActive = `/workspace/${favorite.workspaceId}` === path;

                return (
                  <Link
                    key={favorite.workspaceId}
                    href={`/workspace/${favorite.workspaceId}`}
                    className={`flex items-center justify-between w-full px-3 py-2 text-xs font-medium transition-colors duration-300 transform rounded-lg ${
                      isActive
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-x-2">
                      <span
                        style={{ backgroundColor: favoriteColor }}
                        className="w-2 h-2 rounded-full"
                      ></span>
                      <span>{favorite.workspaceName}</span>
                    </div>
                    <Ellipsis />
                  </Link>
                );
              })
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No favorites available.
              </p>
            )}
          </nav>
        </div>

        {/* Render the modal */}
        <AddWorkspaceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddWorkspace={handleAddWorkspace}
        />

        <div className="mt-auto p-6">
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
