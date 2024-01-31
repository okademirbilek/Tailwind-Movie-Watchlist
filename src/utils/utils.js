export const stopVideos = function (currentvideo) {
  // const videos = document.querySelectorAll(`#video-${currentvideo}`);
  const videos = document.querySelectorAll("iframe, video");

  Array.prototype.forEach.call(videos, function (video) {
    if (video.tagName.toLowerCase() === "video" && video.id == currentvideo) {
      video.pause();
    } else if (video.id == currentvideo) {
      console.log("yeaaaa");
      const src = video.src;
      video.src = src;
    }
  });
};
// export const stopVideos = function (currentvideo) {
//   var videos = document.querySelectorAll("iframe, video");
//   console.log(videos);
//   Array.prototype.forEach.call(videos, function (video) {
//     if (video.tagName.toLowerCase() === "video") {
//       video.pause();
//     } else {
//       var src = video.src;
//       video.src = src;
//     }
//   });
// };
