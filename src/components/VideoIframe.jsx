import React, { memo } from "react";

const VideoIframe = memo(({ data, index }) => {
  return (
    <iframe
      className="container mx-auto  aspect-video  xl:max-w-[1140px] xl:max-h-[615px] "
      src={`https://www.youtube.com/embed/${data.key}`}
      title={data.name}
      // frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      //   onTouchCancel={true}
      id={`video-${index}`}
      loading="lazy"
    ></iframe>
  );
});

export default VideoIframe;
