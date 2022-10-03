import React from "react";
import Post from "../Post";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const Feed = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="mt-4">
        <div onClick={() => handleOpen()} className="inputbox">
          <textarea disabled placeholder="Create a post..." type="text" />
        </div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
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
            placeholder="Write a post.."
          />
          <input type="file" accept="image/png, image/jpg, image/jpeg" />
          <button className="postbuton">POST</button>
        </Box>
      </Modal>
    </>
  );
};

export default Feed;
