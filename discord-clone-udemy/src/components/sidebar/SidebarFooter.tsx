import React from "react";
import "./SidebarFooter.scss";
import MicIcon from "@mui/icons-material/Mic";
import SettingsIcon from "@mui/icons-material/Settings";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { auth } from "../../firebase";
import { useAppSelector } from "../../app/hooks";

const SidebarFooter = () => {
  const user = useAppSelector((state) => state.user);
  //useSelectorが現在の状態を取得するためのHooks
  //useAppSelectorは上のものを型安全で使用するためのHook

  return (
    <>
      <div className="sidebarAccount">
        <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
        <div className="accountName">
          <h4>{user?.displayName}</h4>
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
