const webcamVideoTag = document.querySelector("#webcamVideo");

function youWillGetJobPromiseCallback(resolveFunction, rejectFunction) {
  const didYouGetJob = false;

  if (didYouGetJob) {
    setTimeout((companyName) => resolveFunction(companyName), 5000);
  } else {
    setTimeout((companyName) => rejectFunction(companyName), 1000);
  }
}

const jobPromise = new Promise(youWillGetJobPromiseCallback); // return a promise

function thingsToAfterGettingJob(companyName) {
  console.log(`I got selected at ${companyName}`);
  console.log("Celebrate");
  console.log("Go to the job place");
  console.log("Start doing the job");
}

function thingsToAfterNotGettingJob(companyName) {
  console.log(`I got rejected at ${companyName}`);
  console.log("Don't get discourage.");
  console.log("Apply somewhere else.");
  console.log("Improve yourself");
}

jobPromise
  .then(() => thingsToAfterGettingJob("Microsoft"))
  .catch(() => thingsToAfterNotGettingJob("Google"));

function addSrcObjectToVideo(srcObject) {
  webcamVideoTag.srcObject = srcObject;
}

function getVideoFeedback() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((srcObjectStream) => {
      console.log("Got the video feedback", srcObjectStream);
      addSrcObjectToVideo(srcObjectStream);
      const newVideo = document.createElement("video");
      newVideo.srcObject = srcObjectStream.getVideoTracks()[0];
      document.body.appendChild(newVideo);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log("err", err);
    });
}
