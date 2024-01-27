import React from "react";
import "./SidebarChannel.scss";
import { DocumentData } from "firebase/firestore";

interface ChannelProps {
  channel: DocumentData;
  id: string;
}

const SidebarChannel = (props: ChannelProps) => {
  const { channel, id } = props;
  console.log(channel);

  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
