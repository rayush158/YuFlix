import React from "react";
import "./VideoCard.css";
const VideoCard = ({
  image,
  title,
  channel,
  view,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="videoCard w-72 mb-8">
      <img src={image} />
      <div className="videoCard_info flex mt-2.5 pr-8">
        <img
          class=" videoCard_avatar inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src={channelImage}
          alt="channelImage"
        />
        <div className="video_text ml-4">
          <h4 className="font-bold">{title}</h4>
          <p className="text-gray-300 text-sm">{channel}</p>
          <p className="text-gray-300 text-sm">
            {view} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
