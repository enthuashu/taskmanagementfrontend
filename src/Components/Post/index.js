import React, { useState } from "react";
import "./index.css";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
const Index = () => {
  const [liked, setliked] = useState(false);
  const [saved, setsaved] = useState(false);

  return (
    <div class="container ">
      <div class="row d-flex ">
        <div class="col-md-8">
          <div class="card">
            <div class="d-flex justify-content-between p-2 px-3">
              <div class="d-flex flex-row align-items-center">
                <img
                  src="https://i.imgur.com/UXdKE3o.jpg"
                  width="50"
                  class="rounded-circle"
                />
                <div class="d-flex flex-column ml-2">
                  <span class="font-weight-bold">Jeanette Sun</span>{" "}
                  <small class="text-primary">Collegues</small>{" "}
                </div>
              </div>
              <div class="d-flex flex-row mt-1 ellipsis">
                <small class="mr-2">20 mins</small>{" "}
                <i class="fa fa-ellipsis-h"></i>{" "}
              </div>
            </div>{" "}
            <img src="https://i.imgur.com/xhzhaGA.jpg" class="img-fluid" />
            <div class="p-2">
              <p class="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <hr />
              <div class="d-flex justify-content-between align-items-center">
                <div
                  onClick={() => setliked(!liked)}
                  style={{ cursor: "pointer" }}
                  class="d-flex flex-row icons d-flex align-items-center"
                >
                  {liked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
                </div>
                <div
                  onClick={() => alert("Commented!")}
                  style={{ cursor: "pointer" }}
                  class="d-flex flex-row icons d-flex align-items-center"
                >
                  <CommentIcon />
                </div>
                <div
                  onClick={() => setsaved(!saved)}
                  style={{ cursor: "pointer" }}
                  class="d-flex flex-row muted-color"
                >
                  {saved ? <TurnedInIcon /> : <TurnedInNotIcon />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <br />
    </div>
  );
};

export default Index;
