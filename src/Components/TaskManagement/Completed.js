import React from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Tooltip from "@mui/material/Tooltip";
const Completed = () => {
  return (
    <div className="col-4 taskbox">
      <p className="heading"> IN PROGRESS (5 ISSUES) </p>
      <div className="successlist">
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Shift to Progress" placement="right">
              <button className="progressbutton">
                <RestartAltIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Shift to Progress" placement="right">
              <button className="progressbutton">
                <RestartAltIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Shift to Progress" placement="right">
              <button className="progressbutton">
                <RestartAltIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Shift to Progress" placement="right">
              <button className="progressbutton">
                <RestartAltIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Shift to Progress" placement="right">
              <button className="progressbutton">
                <RestartAltIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Shift to Progress" placement="right">
              <button className="progressbutton">
                <RestartAltIcon />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
