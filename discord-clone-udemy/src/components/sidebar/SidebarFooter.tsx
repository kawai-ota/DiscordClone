import React from "react";
import "./SidebarFooter.scss";
import MicIcon from "@mui/icons-material/Mic";
import SettingsIcon from "@mui/icons-material/Settings";
import HeadphonesIcon from "@mui/icons-material/Headphones";

const SidebarFooter = () => {
  return (
    <>
      <div className="sidebarAccount">
        <img src="./sample.png" alt="" />
        <div className="accountName">
          <h4>Shincode</h4>
          <span>#1929</span>
        </div>
      </div>

      <div className="sidebarVoice">
        <MicIcon />
        <HeadphonesIcon />
        <SettingsIcon />
      </div>
    </>
  );
};

export default SidebarFooter;
