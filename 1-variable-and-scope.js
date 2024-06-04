// Variable can be declared using var, const and let
// var is function scoped
// var variable can be re-declared in the same scope
// let and const are both function and block scoped
// let and const can not be re-declared in the same scope
var myName = "KP";
const myBirthDate = "31-Mar-2000";
let myAge = 26;

// Scope Types
// Global Scope => root level scope of a file
// Block Scope => code that is within "{"(Open curly bracket) "}"(Close curly bracket) has it's own scope called block scope
// Function Scope => code that is within a function is called function scope
// Lexical Scope => How the code is written is how the child will have access to the parent scope, this kind of scoping is called Lexical Scope
// Dynamic Scope => when the "this" key word is used inside a function that is declared with the "function" keyword it has a dynamic scope

// Example of Block Scope Starts
// 1) --------------
{
  // Block Scope
}

// 2) --------------
if (true) {
  // Block Scope
}

// 3) --------------
switch ("variable") {
}
// Example of Block Scope Ends

// Example of Lexical Scope starts
let x = 10;
let y = 20;
if (true) {
  console.log("First IF =>", "x:", x, ";", "y:", y);
  if (true) {
    console.log("Second IF =>", "x:", x, ";", "y:", y);
    if (true) {
      console.log("Third IF =>", "x:", x, ";", "y:", y);
    }
  }
}
// In the above example JS engine will check if it has x and y declared within it's scope if not then it will keep checking in the parent scope until it gets to the global scope
// Example of Lexical Scope Ends

// Example of Dynamic Scope starts
function greet() {
  console.log("Hi, My name is " + this.userName);
}

const developer = {
  userName: "KP",
  greet: greet, // since property and the value are both the same you can write "greet" only once and it will work fine
};

greet(); // Result will be => Hi, my name is undefined
developer.greet(); // Result will be => Hi, my name is KP
// Example of Dynamic Scope ends

// The mystery of "this" keyword starts
// when invoke/call function/method whatever is on the left side of the .(period) is going to be the value of "this" keyword
// "this" key word has dynamic scope when it's used within a function declared by "function" keyword
// "this" key word has lexical scope when it's used within an arrow function

const learner = {
  userName: "Sai Prasad",
  printDynamicThisAfterDelay() {
    setTimeout(function () {
      // when function doesn't have a name then it's called anonymous function
      console.log("Dynamic This:", this);
    });
  },
  printLexicalThisAfterDelay() {
    setTimeout(() => {
      // arrow function: () => { Your code goes here... }
      console.log("Lexical This:", this);
    });
  },
};
// dynamically scoped "this" keyword
learner.printDynamicThisAfterDelay();

// lexically scoped "this" keyword
learner.printLexicalThisAfterDelay();
// The mystery of "this" keyword ends

// What is API starts
// API is really a broad term which means helping functionality whether it's builtin or provided by other developer(s)
// setTimeout, setInterval, fetch, document.create(), document.getElementByID, document.querySelector() etc. are API(s) provided by browser in a browser environment
// Most of the time people relate the API to REST API which is provided by server and acts as the backend developer has configured the server
// https://POKEMON_API_URL/pokemons => in REST API, it should provide data related to all pokemons, how much of the data is exposed depends on the backend developer
// https://POKEMON_API_URL/pokemons/1 => in REST API, it should provide data of the pokemon which has id of 1
// So far we have discussed the REST API in terms of the GET http method but same logic applies to other http methods
// What is API ends
