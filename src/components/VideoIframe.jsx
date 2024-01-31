import React from "react";

const VideoIframe = ({ data }) => {
  return (
    <iframe
      className="container mx-auto  aspect-video  xl:max-w-[1140px] xl:max-h-[615px] "
      src={`https://www.youtube.com/embed/${data.key}`}
      title={data.name}
      // frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      //   onTouchCancel={true}
    ></iframe>
  );
};

export default VideoIframe;
