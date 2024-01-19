import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const Chat = () => {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />
      {/* chatMessage */}
      {/* chatInput */}
      <ChatInput />
    </div>
  );
};

export default Chat;
