const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
var ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

new ffmpeg("E:\\snapshpots\\video.mp4").takeScreenshots(
  {
    filename: "Pic" + Date.now(),
    count: 2,
    timemarks: ["5", "10"], // number of seconds
  },
  "E:\\snapshpots\\ss"
);
