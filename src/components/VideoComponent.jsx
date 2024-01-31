// VideoComponent.jsx
import React, { useRef } from "react";
import YouTube from "react-youtube";

const VideoComponent = ({ videoId, onVideoEnd, index }) => {
  console.log(index);
  const playerRef = useRef(null);

  const onReady = (event) => {
    // Store the player reference
    playerRef.current = event.target;
  };

  const onEnd = () => {
    // Notify the parent component when the video ends
    onVideoEnd();
  };

  return (
    <div className="relative w-full aspect-video">
      <YouTube
        // className={
        //   "container mx-auto  aspect-video  xl:max-w-[1140px] xl:max-h-[615px]"
        // }
        className={`  absolute w-full h-full inset-0`}
        videoId={videoId}
        opts={{ aspectRatio: "16 / 9", width: "1140px", height: "615px" }}
        onReady={onReady}
        onEnd={onEnd}
        id={`video-${index}`}
      />
    </div>
  );
};

export default VideoComponent;
