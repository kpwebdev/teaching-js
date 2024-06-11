// string methods start
const myName = "Khuvanejarkhan Pathan";

// length is property since it's used many time I mentioned it here
console.log("myName.length:", myName.length);

// charAt method is equivalent to accessing a character from a string using [] (square brackets) the only difference is that if the index is out of the range or negative in the case of [] (square brackets) then it will return undefined where as the charAt method will return empty string
console.log("out of the range in myName[80]: ", myName[80]);
console.log("out of the range in myName.charAt(80): ", myName.charAt(80));
console.log("negative index in myName[-1]: ", myName[-1]);
console.log("negative index in myName.charAt(-1): ", myName.charAt(-1));

// at will return undefined in the case of out of range but will start from right in the case of negative index
console.log("out of the range in myName.at(80): ", myName.at(80));
console.log("negative index in myName.at(-1): ", myName.at(-1));

// slice method returns a new string from the start to end index provided to it, if you don't provide the second argument then it will consider the last index of the string as end
// It also works with negative index
console.log("myName.slice(2, 5)):", myName.slice(2, 5));
console.log("myName.slice(-4, -1)):", myName.slice(-4, -1));

// split method returns an array from the given string, depending what delimiter provided
// you can add each letter as a separate member in an array using split("")
// by default if you don't provide any delimiter then it will put the whole string in an array as the only member mean the length of the array will be 1
console.log(myName.split(" "));
console.log(myName.split(""));
console.log(myName.split());

// substring (please note that string is lower case not subString) method works similar to slice but it only works with positive index
console.log("myName.substring(2, 5):", myName.substring(2, 5));
console.log("myName.substring(-4, -1):", myName.substring(-4, -1));

// substr is similar to substring, the only difference is that the second parameter takes length of characters you want from the specified first parameter as index
// Please not that this method is deprecate, I specified this because you will find it in some repos
console.log("myName.substr(2, 5):", myName.substr(2, 5));

// toUpperCase method capitalized all the letters in the string
console.log("myName.toUpperCase():", myName.toUpperCase());

// toLowerCase method make all the letters in the string lower case
console.log("myName.toUpperCase():", myName.toUpperCase());

// trim method removes all negative spaces at the start and the end in string
console.log(
  '"          " + myName + "          ").trim():',
  ("          " + myName + "          ").trim()
);
// similarly we have trimStart and trimEnd methods
console.log(
  '"          " + myName + "          ").trimStart():',
  ("          " + myName + "          ").trimStart()
);
console.log(
  '"          " + myName + "          ").trimEnd():',
  ("          " + myName + "          ").trimEnd()
);

// replace method replaces the first instance it finds the pattern
const kpInfo = 'My name is "KP", and "KP" is the best programmer on the earth.';
console.log(
  'kpInfo.replace("KP", "Sai Prasad"):',
  kpInfo.replace("KP", "Sai Prasad")
);
// replaceAll method replaces all the instances it finds the pattern
console.log(
  'kpInfo.replaceAll("KP", "Sai Prasad"):',
  kpInfo.replaceAll("KP", "Sai Prasad")
);

// indexOf returns the index of the first instance it finds the letter/word or returns -1 if it doesn't find the specified letter/word
console.log('myName.indexOf("K"):', myName.indexOf("K"));
console.log('myName.indexOf("z"):', myName.indexOf("z"));

// includes returns true if it find the specified letter/word, otherwise false
console.log('myName.includes("K"):', myName.includes("K"));
console.log('myName.includes("z"):', myName.includes("z"));
// string methods end

// number methods start
const myAge = 24;

// toString method normally returns string value of the number
console.log("myAge.toString():", myAge.toString());
// you can also convert it into string representation of other number system
console.log("myAge.toString(2) for binary:", myAge.toString(2));
console.log("myAge.toString(16) for hexadecimal:", myAge.toString(16));

// toFixed is used to get string representation for the specified decimal points with round off
console.log("PI:", Math.PI);
console.log("Math.PI.toFixed(2):", Math.PI.toFixed(2));
console.log("Math.PI.toFixed(4):", Math.PI.toFixed(4));
// number methods end

// array methods start
const skills = ["HTML", "CSS", "SCSS", "JS", "TS", "NodeJS", "ExpressJS"];
// length property returns length of the array
console.log("skills.length:", skills.length);

// push method adds the new member(s) at end
skills.push("MongoDB", "MySQL");
console.log("skills after pushing 'MongoDB' and 'MySQL':", skills);

// pop method removes the last member from the array and returns the same
console.log("skills.pop():", skills.pop());
console.log("skills.pop():", skills.pop());
console.log("skills after running pops twice:", skills);

// unshift method adds member(s) at the starting of an array
skills.unshift("MongoDB", "MySQL");
console.log("skills after unshifting 'MongoDB' and 'MySQL':", skills);

// shift method removes the first member from an array and returns the same
console.log("skills.shift():", skills.shift());
console.log("skills.shift():", skills.shift());
console.log("skills after running shift twice:", skills);

// join method converts an array to a string with the specified delimiter
console.log("skills.join('--'):", skills.join("--"));
console.log("skills after calling the join method:", skills);

// at method works the same way [] (square brackets) works the only difference is that it supports negative indexing
console.log("skills[-1]:", skills[-1]);
console.log("skills.at(-1):", skills.at(-1));

// slice returns new array which start from the first parameter index and the second parameter index, but doesn't include the last index member
console.log("skills.slice(2, 5)", skills.slice(2, 5));
console.log("skills after calling slice method:", skills);

// splice deletes the specified number of elements in the second parameter, starting from the first parameter, be careful it modifies the original array
console.log("skills.splice(2, 2)", skills.splice(2, 2));
console.log("skills after calling splice method:", skills);

// sort method returns alphabetically sorted array, be careful it modifies the original array
console.log("skills.sort()", skills.sort());
console.log("skills after calling sort method:", skills);

// concat
const newSkills = ["MongoDB", "MySQL"];
console.log("skills.concat(newSkills):", skills.concat(newSkills));
console.log("newSkills.concat(skills):", newSkills.concat(skills));
console.log("skills after calling concat method twice:", skills);

// indexOf method returns the index of the first instance of the member, otherwise returns -1
console.log("skills.indexOf('HTML'):", skills.indexOf("HTML"));
console.log("skills.indexOf('html'):", skills.indexOf("html"));

// includes method returns true if it find the member, otherwise false
console.log("skills.includes('HTML'):", skills.includes("HTML"));
console.log("skills.includes('html'):", skills.includes("html"));

// array methods end

// object methods start
const developer = {
  name: "KP",
  age: 24,
  country: "India",
};

// Object.keys(OBJECT) method returns an array which contains all the properties of a object
console.log("Object.keys(developer):", Object.keys(developer));

// Object.values(OBJECT) method returns an array which contains all the values of a object
console.log("Object.values(developer):", Object.values(developer));

// Object.entires(OBJECT) method returns an array which contains key value pairs of a object
console.log("Object.entries(developer):", Object.entries(developer));
// object methods end

// advance array method starts
{
  const skills = ["HTML", "CSS", "SCSS", "JS", "TS", "NodeJS", "ExpressJS"];
  console.log("skills:", skills);

  // forEach method is used when we want to run specif code for each member in an array
  console.log("===========forEach===========");
  skills.forEach((skill, index, skills) => {
    console.log("skill:", skill);
    console.log("index:", index);
    console.log("skills:", skills);
  });

  // map method is used when we want to perform some calculation on each member return this new changes as an array
  console.log("===========map===========");
  const advanceSkills = skills.map((skill, index, skills) => {
    console.log("skill:", skill);
    console.log("index:", index);
    console.log("skills:", skills);
    return `Advance ${skill}`;
  });
  console.log("advanceSkills:", advanceSkills);

  // find method is used to find a member based on a conditional logic expression
  console.log("===========find===========");
  const foundSkill = skills.find((skill, index, skills) => {
    console.log("skill:", skill);
    console.log("index:", index);
    console.log("skills:", skills);
    return skill === "HTML";
  });
  console.log("foundSkill:", foundSkill);

  // filter method is used to filter out members based on a conditional logic expression
  console.log("===========filter===========");
  const filteredSkills = skills.filter((skill, index, skills) => {
    console.log("skill:", skill);
    console.log("index:", index);
    console.log("skills:", skills);
    return skill !== "HTML";
  });
  console.log("filteredSkills:", filteredSkills);

  // reduce method is used to reduce the whole array to one thing
  console.log("===========reduce===========");
  const numbers = [1, 2, 3, 4, 5];

  console.log("===========reduce with numbers===========");
  const sumOfNumbers = numbers.reduce((acc, val) => {
    console.log("acc:", acc);
    console.log("val:", val);
    return acc + val;
  }, 0);
  console.log("sumOfNumbers:", sumOfNumbers);

  console.log("===========reduce with skills===========");
  const skillObj = skills.reduce((acc, val) => {
    console.log("acc:", acc);
    console.log("val:", val);
    acc[val] = val;
    return acc;
  }, {});
  console.log("skillObj:", skillObj);
}
// advance array method ends
