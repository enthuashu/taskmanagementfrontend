import React from "react";
import StartIcon from "@mui/icons-material/Start";
import Tooltip from "@mui/material/Tooltip";
const Todo = () => {
  return (
    <div className="col-4 taskbox">
      <p className="heading"> TO DO (18 ISSUES)</p>
      <div className="tasklist">
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Start Task" placement="right">
              <button className="progressbutton">
                <StartIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Start Task" placement="right">
              <button className="progressbutton">
                <StartIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Start Task" placement="right">
              <button className="progressbutton">
                <StartIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Start Task" placement="right">
              <button className="progressbutton">
                <StartIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Start Task" placement="right">
              <button className="progressbutton">
                <StartIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-10">
            <p>Task 1</p>
          </div>
          <div className="col-2">
            <Tooltip title="Start Task" placement="right">
              <button className="progressbutton">
                <StartIcon />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
