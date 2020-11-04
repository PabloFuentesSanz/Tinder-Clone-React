import React from "react";
import { Link } from "react-router-dom";
import "./styles/Chat.css";
import Avatar from "@material-ui/core/Avatar";

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chatImg" alt={name} src={profilePic} />
        <div className="chatDetails">
          <h2>{name}</h2>
          <p className="message">{message}</p>
        </div>
        <p className="chatTime">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
