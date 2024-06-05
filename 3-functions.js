// Input ==> Function ==> Output
function return5() {
  return 5;
}
console.log(return5());
console.log(return5());
console.log(return5());
// expression generates value
5;
5 + 5;

// statement doesn't generate a value but performs action and provide place to add expression
if (true) {
  // some more statements
}

// function declaration => When you use "function" keyword for function declaration
function sum(x, y) {
  return x + y;
}

// function expression => When you use "const" or "let" keyword for function declaration
const sub = function (x, y) {
  return x - y;
};

// higher order function => function that takes function as an argument or returns an function
function doMath(sumFunc, subFunc, x, y) {
  const sumResult = sumFunc(x, y);
  const subResult = subFunc(x, y);
  console.log(`sumResult: ${sumResult}; subResult: ${subResult}`);
}

doMath(sum, sub, 10, 20);

function generateMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const multiplyBy2 = generateMultiplier(2);
const multipleOf2 = multiplyBy2(3);
console.log("multipleOf2:", multipleOf2);

// anonymous function => function that doesn't have any name
// most of the time we use anonymous function in higher order function
setTimeout(function fistFunc() {
  console.log("First anonymous function");
}, 1000);

// we use anonymous function so much that we have arrow function to make our life easier
setTimeout(() => {
  console.log("Second anonymous function");
}, 1000);

// implicit return => if you want to return expression in arrow function you don't need "{" "}" curly brackets
const sumImplicitly = (x, y) => x + y;
console.log(sumImplicitly(2, 3));

// you can omit parenthesis if you have only one parameter in an arrow function
const multipleBy3 = (num) => num * 3;
console.log(multipleBy3(2));

// execution context is an environment created every time a function gets invoked
// whatever is declared inside this execution context will be destroyed once the function code execution is finished

// callstack is what shows where we are in a code execution
// if you have functions nested inside one another then whatever function was called first will be on the bottom and the last one on the top, and the one on top will finish execution first and the others from top to bottom will be executed
function first() {
  console.log("first function");
  second();
  function second() {
    console.log("second function");
    third();
    function third() {
      console.log("third function");
    }
  }
  console.log("first function");
}
first();

// optional param in function
function greet(personName = "There") {
  console.log(`Hi, ${personName}`);
}
greet();
greet("KP");

// rest operator => ...CUSTOM_VARIABLE
// rest operator takes all the parameter and put it inside an array
function sumAll(firstNum, secondNum, ...remainingNums) {
  const sumOfFirstTwoNums = firstNum + secondNum;
  const remainingSum = remainingNums.reduce((acc, val) => acc + val);
  const sum = sumOfFirstTwoNums + remainingSum;
  return sum;
}

console.log(sumAll(1, 2, 3, 4));

// spread operator => ...VARIABLE_THAT_ALREADY_EXISTS
// we can unpack array inside an function
const numbersFrom1To3 = [1, 2, 3];
const numbersFrom4To10 = [4, 5, 6, 7, 8, 9, 10];

function sumOnlyFirstThreeNumbers(
  firstNum,
  secondNum,
  thirdNum,
  ...remainingNums
) {
  const sum = firstNum + secondNum + thirdNum;
  console.log("extra numbers:", remainingNums);
  return sum;
}

console.log(sumOnlyFirstThreeNumbers(...numbersFrom1To3));
console.log(sumOnlyFirstThreeNumbers(...numbersFrom4To10));

// function declared with "function" keyword is fully hoisted and variable declared with "var" keyword are partially hoisted
// hoisting happens for "const" and "let" as well but JS doesn't allow you to access them before declaration
console.log(hoistedVarVariable);
var hoistedVarVariable =
  "var: You can use me before declaration but it will give you undefined";

console.log(hoistedConstVariable);
const hoistedConstVariable =
  "const: You will get an error if you try to access me before Declaration";

console.log(hoistedLetVariable);
let hoistedLetVariable =
  "let: You will get an error if you try to access me before Declaration";

hoistedFunction();
function hoistedFunction() {
  console.log(
    "You can run me before I am even declared.\nHow awesome is that!"
  );
}

// IIFE => Immediately Invoked Function Expression
(function () {
  console.log("IIFE without any arguments");
})();

(function (x) {
  console.log(`IIFE with argument i.e. x:`, x);
})(5);

// function variable as argument to a function it's passed value
const userName = "KP";

function greetMe(userName) {
  // assign the value to it from the argument
  console.log("userName (inside function) Before assignment", userName);
  userName = "Random  Name";
  console.log("userName (inside function) after assignment", userName);
}

console.log("userName before running greetMe", userName);
greetMe(userName);
console.log("userName after running greetMe", userName);

// object example
const myInfo = {
  userName: "KP",
};

// parameter => param
function printInfo(info) {
  console.log("info before assignment (inside Function):", info);
  info = {
    userName: "Prasad",
  };
  console.log("info after assignment (inside Function):", info);
}

console.log("myInfo before running printInfo function:", myInfo);
// argument
printInfo(myInfo);
console.log("myInfo before running printInfo function:", myInfo);
