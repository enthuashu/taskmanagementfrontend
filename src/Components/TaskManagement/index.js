import React from "react";
import Completed from "./Completed";
import Progress from "./Progress";
import Todo from "./Todo";
const TaskManagement = () => {
  return (
    <>
      <button className="addtask">CREATE TASK</button>
      <div className="row taskrow">
        <Todo />
        <Progress />
        <Completed />
      </div>
    </>
  );
};

export default TaskManagement;
