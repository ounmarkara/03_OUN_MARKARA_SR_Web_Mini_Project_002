import React from "react";
import CardComponent from "./card";

const Finished = ({ tasks }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Finished</h3>
      {tasks.length > 0 ? (
        tasks.map((task) => <CardComponent key={task.taskId} task={task} />)
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default Finished;
