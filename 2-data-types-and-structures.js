// Primitive Data Types Starts => raw value
const myName = "KP"; // string data type '', "", ``
const myAge = 26; // number data type
const myIncome = 70_000; // number data type with "_" for readability purpose
const myInstagramFollowers = 10000000000000000000000000n; // big int data type
const myYoutubeSubscribers = 10_000_000_000_000_000_000_000_000n; // big int data type with "_" for readability purpose
const isMarried = true; // boolean data type
const achievementOfTheLife = undefined; // undefined mean the value is not present
const currentWorkingCompany = null; // undefined mean the value is not present but it is done manually
// Primitive Data Types Ends

// Data Structures starts
// object data structure
const family = {
  self: {
    memberName: "KP",
    age: 26,
  },
  father: {
    memberName: "XYZ",
    age: 53,
  },
  mother: {
    memberName: "ABC",
    age: 45,
  },
  spouse: {
    memberName: "ABC",
    relation: "Wife",
    age: 27,
  },
  children: [
    {
      memberName: "XYZ",
      age: 0.17,
    },
    {
      memberName: "ABC",
    },
  ],
};

// array data structure (the truth is array is also an object)
const skills = [
  "HTML",
  "CSS",
  "SCSS",
  "JS",
  "TS",
  "Bootstrap",
  "TailwindCSS",
  "React",
  "Material UI",
  "nodeJS",
  "expressJS",
  "MySQL",
  "Firebase",
];
// set data structure (the truth is it's an object)
const myFriends = new Set([
  "Sai Prasad",
  "Siddharaj",
  "Mohit",
  "Angad",
  "Sujeet",
]);
// map data structure (the truth is it's an object)
const workedWithCompanies = new Map([
  ["first", "Google"],
  ["second", "Facebook"],
  ["third", "Microsoft"],
]);
// Data Structures ends

// Difference between sets and arrays starts
const myFriendsInsideSet = new Set();
const myFriendsInsideArray = [
  "Sai Prasad",
  "Siddharaj",
  "Mohit",
  "Angad",
  "Sujeet",
];
myFriendsInsideSet.add("Sai Prasad");
myFriendsInsideSet.add("Siddharaj");
myFriendsInsideSet.add("Mohit");
myFriendsInsideSet.add("Angad");
myFriendsInsideSet.add("Sujeet");

function addFriendInArray(friendsArray, friendName) {
  const hasFriendAlready = friendsArray.includes(friendName);

  if (!hasFriendAlready) {
    friendsArray.push(friendName);
  }
}

console.log(myFriendsInsideArray);
addFriendInArray(myFriendsInsideArray, "Mohit");
addFriendInArray(myFriendsInsideArray, "Sarukkhan");
console.log(myFriendsInsideArray);
// Difference between sets and arrays ends

// Difference between objects and maps starts
const learningEnglish = {
  c: 3,
  d: 4,
  b: 2,
  a: 1,
};

const learningEnglishInsideMap = new Map([
  ["c", 3],
  ["d", 4],
  ["b", 2],
  ["a", 1],
]);

console.log("learningEnglish: ", learningEnglish);
console.log("learningEnglishInsideMap: ", learningEnglishInsideMap);
console.log(
  "Porperties in learningEnglishInsideMap",
  Array.from(learningEnglishInsideMap.keys())
);
console.log(
  "Values in learningEnglishInsideMap",
  Array.from(learningEnglishInsideMap.values())
);
console.log(
  "Keys and Values in learningEnglishInsideMap",
  Array.from(learningEnglishInsideMap.entries())
);
// Difference between objects and maps ends
