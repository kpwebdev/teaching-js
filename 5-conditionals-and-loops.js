// conditionals are used to run a code based on a condition.
// if statement
// if(CONDITIONAL_LOGIC OR EXPRESSION){
//   your code goes here...
// } else if(CONDITIONAL_LOGIC OR EXPRESSION){
//   your code goes here
// }
// ...other else if conditions
// else {
//   you code goes here
// }

{
  // the following example is for India only
  const age = 16;
  if (age >= 18 && age < 21) {
    console.log(
      "You can have your license, PAN card and voter ID, you can drive vehicle and decide the future of the nation"
    );
  } else if (age >= 21) {
    console.log("You can get married.");
  } else {
    console.log(
      "You are not cable of making decisions for the nation or having a marriage."
    );
  }
}

// switch statements are more easy to read than many if conditions
// switch(CONDITIONAL_LOGIC OR EXPRESSION){
//   case VALUE_1:
//     code if it matches the VALUE_1
//   break;
//   case VALUE_2:
//     code if it matches the VALUE_2
//   break;
//   case VALUE_3:
//     code if it matches the VALUE_3
//   break;
//   case VALUE_4:
//     code if it matches the VALUE_4
//   break;
//   default:
//     code if it doesn't match any of the above mentioned values
// }

{
  const day = "mon";
  switch (day) {
    case "mon":
      console.log("Go To work", day);
      break;
    case "tue":
      console.log("Go To work", day);
      break;
    case "wen":
      console.log("Go To work", day);
      break;
    case "thu":
      console.log("Go To work", day);
      break;
    case "fri":
      console.log("Go To work", day);
      break;
    case "sat":
      console.log("Improve your self and enjoy", day);
      break;
    case "sun":
      console.log("Improve your self and enjoy", day);
      break;
    default:
      throw new Error("Please provide proper day of the week");
  }
}

// Loops are great to repeat a certain code multiple times
// Before Loop;
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
// for loop => when we know the number of iteration required
for (let number = 0; number <= 10; number++) {
  console.log(number);
}
// how the for loop works
let count = 1;
for (
  console.log("Initializing the variable");
  !console.log("Checking the condition");
  console.log("Updating the variable")
) {
  if (count > 5) break;
  console.log("================", count, "================");
  console.log("Running the code");
  count++;
}

// continue keyword => goes to next iteration
// break keyword => breaks the loop
for (let number = 0; number <= 10; number++) {
  if (number === 2) continue;
  if (number === 5) break;
  console.log(number);
}

// while loop => when we don't know the number of iteration but the condition
// how  the while loop works
{
  let count = 1;
  while (!console.log("Checking the condition")) {
    if (count > 5) break;
    console.log("=========", count, "=========");
    console.log("running the code");
    count++;
  }
  console.log(count);
}

{
  let age = 0;
  while (age < 21) {
    if (age === 18) {
      console.log("You can have license, PAN, and voter ID");
    } else {
      console.log("You are not there yet, age:", age);
    }
    age++;
  }
  console.log("You can get married.");
  console.log("Your life starts now.");
}

// for of loop is used for arrays
{
  const colors = ["red", "green", "blue", "purple"];
  for (let color of colors) {
    console.log(color);
  }
}

// for in loop is used for object
{
  const developer = {
    userName: "KP",
    age: 24,
  };
  for (let property in developer) {
    console.log("Property:", property, ", value:", developer[property]);
  }
}

// rest operator in object
{
  const developer = {
    userName: "KP",
    age: 24,
    country: "India",
  };

  const { userName, ...otherProps } = developer;
  console.log("userName", userName);
  console.log("otherProps", otherProps);
  console.log(developer);
}

// rest operator for array
{
  const colors = ["red", "green", "blue", "purple"];
  const [firstColor, ...restColors] = colors;
  console.log(firstColor, restColors);
}

// other loop in JS
// do{} while()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// Assignment code start
console.clear();

function myDailyActivities() {
  console.log("Woke up at 7:00 AM");
  console.log("I brush my teeth");
  console.log("I have lunch");
  console.log("I do some code practice");
}

for (let day = 1; day <= 10; day++) {
  console.log("=============", day, "=============");
  myDailyActivities();
}

const learningLectures = [
  "variables and scopes",
  "functions",
  "operators",
  "conditionals and switch",
];

for (let learningLecture of learningLectures) {
  const learningLectureIndex = learningLectures.indexOf(learningLecture);
  const day = learningLectureIndex + 1;

  const learningLectureInCapital =
    learningLecture[0].toUpperCase() + learningLecture.slice(1);

  console.log("=============", day, "=============");
  myDailyActivities();
  console.log("Attended session with KP on:", learningLectureInCapital);
}
// Assignment code ends
