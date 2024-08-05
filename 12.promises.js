const webcamVideoTag = document.querySelector("#webcamVideo");
const fileInput = document.querySelector("#fileInput");

function youWillGetJobPromiseCallback(resolveFunction, rejectFunction) {
  const didYouGetJob = true;

  if (didYouGetJob) {
    setTimeout(() => resolveFunction("Microsoft"), 10 * 1000);
  } else {
    setTimeout(() => rejectFunction("Google"), 10 * 1000);
  }
}

const jobPromise = new Promise(youWillGetJobPromiseCallback); // return a promise

function thingsToAfterGettingJob(companyName) {
  const newPara = (document.createElement("p").innerHTML =
    `You got selected at ${companyName}`);
  document.body.appendChild(newPara);
  console.log(`I got selected at ${companyName}`);
  console.log("Celebrate");
  console.log("Go to the job place");
  console.log("Start doing the job");
}

function thingsToAfterNotGettingJob(companyName) {
  const newPara = document.createElement("p");
  newPara.innerHTML = `You got rejected at ${companyName}`;
  document.body.appendChild(newPara);
  console.log(`I got rejected at ${companyName}`);
  console.log("Don't get discourage.");
  console.log("Apply somewhere else.");
  console.log("Improve yourself");
}

jobPromise
  .then((companyName) => {
    console.log(`Got job at ${companyName}`);
    return 50_000;
  })
  .then((salary) => {
    console.log(`Got salary of ${salary}`);
    return "Mumbai";
  })
  .then((placeToWork) => {
    console.log(`I need to go to ${placeToWork}`);
  })
  .catch((companyName) => thingsToAfterNotGettingJob(companyName));

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
      newVideo.controls = true;
      newVideo.srcObject = srcObjectStream;
      document.body.appendChild(newVideo);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log("err", err);
    });
}

// real life promise
// YOU: you asked to your dad, please buy me PS5
// DAD: Said, ok son I will give you PS5 (promise)
// meantime, your promise is pending
// After 2 Years
// CASE 1: ===
// DAD: You know son, let's go and buy the PS5
// He really bought you the PS5
// Your promise got resolved
// CASE 2: ===
// DAD: I am not going to buy you the PS5
// Your promise got rejected

fileInput.addEventListener("change", (e) => {
  if (e.target.files[0].type.startsWith("image/")) {
    const previewImg = document.querySelector("#previewImg");
    const newImageUrl = URL.createObjectURL(e.target.files[0]);

    if (previewImg) {
      return (previewImg.src = newImageUrl);
    }

    const newImage = document.createElement("img");
    newImage.src = newImageUrl;
    newImage.id = "previewImg";
    document.body.appendChild(newImage);
  }

  if (e.target.files[0].type.startsWith("video/")) {
    const previewVideo = document.querySelector("#previewVideo");
    const newImageUrl = URL.createObjectURL(e.target.files[0]);

    if (previewVideo) {
      return (previewVideo.src = newImageUrl);
    }

    const newVideo = document.createElement("video");
    newVideo.src = newImageUrl;
    newVideo.id = "previewVideo";
    newVideo.controls = true;
    document.body.appendChild(newVideo);
  }

  if (e.target.files[0].type.startsWith("audio/")) {
    const previewAudio = document.querySelector("#previewAudio");
    const newImageUrl = URL.createObjectURL(e.target.files[0]);

    if (previewAudio) {
      return (previewAudio.src = newImageUrl);
    }

    const newAudio = document.createElement("video");
    newAudio.src = newImageUrl;
    newAudio.id = "previewAudio";
    newAudio.controls = true;
    document.body.appendChild(newAudio);
  }
});

// async await
function generatePromise(action, delay) {
  const newPromise = new Promise((resolve, reject) => {
    if (action === "resolve") {
      return setTimeout(() => {
        resolve("I will be your GF.");
      }, delay);
    }

    if (action === "reject") {
      return setTimeout(() => {
        reject("I already have a BF.");
      }, delay);
    }
  });

  return newPromise;
}

const proposePromise = generatePromise("reject", 5000);
proposePromise
  .then((successMessage) => console.log(successMessage))
  .catch((failMessage) => console.log(failMessage));

async function marryPromiseFunction1() {
  const reply = await generatePromise("resolve", 1000);
  console.log(`Reply to your marriage proposal: ${reply}`);
}

// try and catch block
try {
  console.log("Before error");

  if (false) {
    throw new Error("This is an error");
  }

  console.log("After error");
} catch (error) {
  console.log("Something went wrong here", err);
}

marryPromiseFunction1();
console.log("Hello There.............");

const POKEMON_API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/random pokemon";

// pokemon API code
async function fetchPokemonAsync() {
  try {
    const response = await fetch(POKEMON_API_ENDPOINT);
    console.log("response (async):", response);
    if (response.ok) {
      throw new Error("Something went wrong");
    }
    const pokemonDetail = await response.json();
    console.log("pokemonDetail (Async):", pokemonDetail);
  } catch (err) {
    console.log("Something went wrong:", err);
  }
}

function fetchPokemon() {
  fetch(POKEMON_API_ENDPOINT)
    .then((response) => {
      console.log("response:", response);
      if (response.ok) {
        throw new Error("Something went wrong");
      }
      return response.json();
    })
    .then((pokemonDetail) => console.log("pokemonDetail:", pokemonDetail))
    .catch((err) => console.log("Something went wrong:", err));
}

fetchPokemonAsync();
fetchPokemon();

// difference between asyncronous browser API(s), callbacks, Promises

// Promise based browser API
fetch(
  "https://images.unsplash.com/photo-1714738640189-677cc91c8a47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
)
  .then((response) => response.blob())
  .then((blobFile) => console.log(blobFile))
  .catch((err) => console.log("Something went wrong", err));

// Asyncronous browser API
const timeoutId = setTimeout(() => {
  console.log("Time is up");
}, 0);

// callback function
function greet() {
  console.log("Hi There");
}

// higher order function
function runFunction(greetFunction) {
  greetFunction();
}

runFunction(() => console.log("How are you?"));

// custom promise
new Promise((resolve, reject) => {
  resolve();
}).then(() => console.log("I got resove"));

// Another demonstration of promises
new Promise(function (resolveFunction, rejectFunction) {
  const genericError = new Error("I don't want to reply");
  rejectFunction(genericError);
  resolveFunction({ captainAmerica: "Lucky", ironMan: "Super Lucky" });
})
  .then(function (superman) {
    console.log(
      "I just got resolved.",
      superman.captainAmerica,
      superman.ironMan,
    );
  })
  .catch((err) => console.log("Something went wrong", err));

// sequencial promises execution
function firstPokemon() {
  return fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((response) => response.json())
    .then((data) => data);
}

function secondPokemon() {
  return fetch("https://pokeapi.co/api/v2/pokemon/1000000000000000000")
    .then((response) => {
      console.log("response", response);

      if (!response.ok) {
        throw new URIError(`Server responded with ${response.status} code`);
        // throw "Something went wrong by string"
      }

      return response.json();
    })
    .then((data) => data);
}

firstPokemon()
  .then((pokemon) => console.log("first pokemon", pokemon))
  .then(secondPokemon)
  .then((pokemon) => console.log("second pokemon", pokemon))
  .catch((err) => console.log("Something went wrong", err));
