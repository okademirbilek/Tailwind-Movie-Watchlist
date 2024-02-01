import { enqueueSnackbar } from "notistack";

export const stopVideos = (currentvideo) => {
  const videos = document.querySelectorAll(`#video-${currentvideo}`);
  // const videos = document.querySelectorAll("iframe, video");

  Array.prototype.forEach.call(videos, function (video) {
    const src = video.src;
    video.src = src;
  });
};

export const callSnackBar = (message, variant) => {
  enqueueSnackbar(message, {
    anchorOrigin: { vertical: "bottom", horizontal: "right" },
    variant: variant,
  });
};
