const levels = document.querySelector("#levels");
const level1 = document.querySelector("#level1");
const level2 = document.querySelector("#level2");
const level3 = document.querySelector("#level3");
const siblingLevel = document.querySelector("#siblingLevel");
const form = document.querySelector("form");
const anchorTag = document.querySelector("a");
const scrollDiv = document.querySelector("#scrollMe");
// old ways
// levels.onclick = function () {
//   console.log("You just clicked on levels");
// };

// event bubbling
// levels.addEventListener("click", function () {
//   console.log("You clicked on levels");
// }, false /*  You are adding you event on bubbling */);

// event capturing
// levels.addEventListener("click", function () {
//   console.log("You clicked on levels");
// }, true /*  You are adding you event on capturing */);

levels.addEventListener(
  "click",
  function () {
    console.log("You just clicked on levels");
  },
  true
);
level1.addEventListener(
  "click",
  function () {
    console.log("You just clicked on level1");
  },
  true
);
level2.addEventListener(
  "click",
  function () {
    console.log("You just clicked on level2");
  },
  true
);
level3.addEventListener(
  "click",
  function () {
    console.log("You just clicked on level3");
  },
  true
);
siblingLevel.addEventListener(
  "click",
  function () {
    console.log("You just clicked on siblingLevel");
  },
  true
);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submit event:", e);
  // console.log(e.target)
  // console.log(e.currentTarget)
  // console.log(e.clientX)
  // console.log(e.clientY)
  // console.log(e.screenX)
  // console.log(e.screenY)
});

anchorTag.addEventListener("", function (e) {
  e.preventDefault();
  console.log("click event:", e);
});

document.body.addEventListener("scroll", function (e) {
  console.log("scroll event:", e);
});

scrollDiv.addEventListener("scroll", function (e) {
  console.log("scroll event:", e);
});

async function fetchVideo(url) {
  const response = await fetch(url);
  const videoObj = await response.blob();

  return videoObj;
}

function appendVideo(videoObj) {
  const videoEl = document.createElement("video");
  const urlVideo = URL.createObjectURL(videoObj);
  videoEl.src = urlVideo;
  videoEl.controls = "on";

  document.body.appendChild(videoEl);
}

async function fetchAndAppendVideo(url) {
  const videoObj = await fetchVideo(url);
  appendVideo(videoObj);
}

// fetchAndAppendVideo(
//   "https://videos.pexels.com/video-files/856990/856990-hd_1920_1080_30fps.mp4"
// );
