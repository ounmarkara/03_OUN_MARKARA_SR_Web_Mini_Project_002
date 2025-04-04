import React from "react";
import CardComponent from "./card";

const InProgress = ({ tasks }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">In Progress</h3>
      {tasks.length > 0 ? (
        tasks.map((task) => <CardComponent key={task.taskId} task={task} />)
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default InProgress;
