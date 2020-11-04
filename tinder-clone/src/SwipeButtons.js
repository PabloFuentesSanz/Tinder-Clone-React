import React from "react";
import "./styles/SwipeButtons.css";
import Replay from "@material-ui/icons/Replay";
import Close from "@material-ui/icons/Close";
import StarRate from "@material-ui/icons/StarRate";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeRepeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="swipeClose">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipeStar">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="swipeRight">
        <Favorite fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
