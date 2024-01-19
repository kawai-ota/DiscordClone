import React from "react";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

const ChatMessage = () => {
  return (
    <div className="chatMessage">
      <div className="message">
        <Avatar />
        <div className="messageInfo">
          <h4>
            ota Code
            <span className="messageTimeStamp">2024/1/20</span>
          </h4>
          <p>メッセージ本文</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
