const player = new Plyr("#player", {
  controls: [
    "play-large",
    "rewind",
    "play",
    "fast-forward",
    "progress",
    "current-time",
    "mute",
    "volume",
    "captions",
    "settings",
    "pip",
    "fullscreen",
  ],
});

function play() {
  const videoUrl = document.getElementById("vid").value;
  if (!videoUrl) {
    alert("Please enter a video URL.");
  } else {
    document.getElementById("player").src = videoUrl;
    document.getElementById("player").scrollIntoView({
      behavior: "smooth",
    });
  }
}
