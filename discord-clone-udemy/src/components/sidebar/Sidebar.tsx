import React, { useEffect } from "react";
import "./Sidebar.scss";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarChannel from "./SidebarChannel";
import SidebarFooter from "./SidebarFooter";
import { useAppSelector } from "../../app/hooks";
import { db } from "../../firebase";
import { onSnapshot, collection, query } from "firebase/firestore";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);

  const q = query(collection(db, "channels"));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const channelsResults = [];
      querySnapshot.docs.forEach((doc) => console.log(doc));
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>puroguraming</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>

          <div className="sidebarChannelsList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>

          <div className="sidebarFooter">
            <SidebarFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
