import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Tooltip from "@mui/material/Tooltip";
const Progress = () => {
  return (
    <div className="col-4 taskbox">
      <p className="heading"> IN PROGRESS (5 ISSUES) </p>
      <div className="progresslist">
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Mark as Completed" placement="right">
              <button className="completebutton">
                <DoneAllIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Mark as Completed" placement="right">
              <button className="completebutton">
                <DoneAllIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Mark as Completed" placement="right">
              <button className="completebutton">
                <DoneAllIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Mark as Completed" placement="right">
              <button className="completebutton">
                <DoneAllIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Mark as Completed" placement="right">
              <button className="completebutton">
                <DoneAllIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Mark as Completed" placement="right">
              <button className="completebutton">
                <DoneAllIcon />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
