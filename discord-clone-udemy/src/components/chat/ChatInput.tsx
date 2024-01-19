import React from "react";
import "./ChatInput.scss";
import { AddCircleOutline } from "@mui/icons-material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const ChatInput = () => {
  return (
    <div className="chatInput">
      <AddCircleOutline />
      <form>
        <input type="text" placeholder="#Udemyへメッセージを送信する" />
        <button type="submit" className="chatInputButton">
          sousinn
        </button>
      </form>

      <div className="chatInputIcons">
        <CardGiftcardIcon />
        <GifIcon />
        <SentimentSatisfiedAltIcon />
      </div>
    </div>
  );
};

export default ChatInput;
