import React, { useState } from "react";
import Completed from "./Completed";
import Progress from "./Progress";
import Todo from "./Todo";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const TaskManagement = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [deadlinedate, setdeadlinedate] = useState(new Date());

  const handleChange = (newValue) => {
    setdeadlinedate(newValue);
  };
  return (
    <>
      <button onClick={() => handleOpen()} className="addtask">
        CREATE TASK
      </button>
      <div className="row taskrow">
        <Todo />
        <Progress />
        <Completed />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <textarea
            className="postbox"
            type="text"
            placeholder="Create a task.."
          />
          <div className="row">
            <div className="col-6 mt-2">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Task Deadline"
                    inputFormat="DD/MM/YYYY"
                    value={deadlinedate}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
            <div className="col-6">
              <button className="postbuton">Create Task</button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default TaskManagement;
