const button = document.querySelector("button");

button.addEventListener(
  "click",
  (() => {
    let name = "Random";

    return function () {
      name = prompt(`Previously entered name: ${name}, Please enter new one`);
    };
  })()
);

console.clear();

function useState(initialState) {
  let state = initialState || { userName: "KP" };

  function setState(updatedState) {
    // if(typeof state !== "string") throw new TypeError("invalid type detected, you can only provide string.");
    if (state === updatedState) {
      console.log("values are the same");
      return;
    }

    state = updatedState;
  }

  function getState() {
    return state;
  }

  return [getState, setState];
}

const [getUser, setUser] = useState({ userName: "Sai Prasad" } /*0x123456*/);
const user = getUser(); /*0x123456*/
console.log(user);
user.userName = "Radhika"; /*0x123456*/ /*memory location is still the same*/
const updatedUser = { ...user, userName: "Randhika" };
setUser(updatedUser);
console.log(getUser());
console.log("user === updatedUser", user === updatedUser);

// second example of closure
console.clear();
/*
Parent Function
    Variable a
    Child Function
        Access Variable a
return Child Function
Child Function
*/

console.log(performance.memory);

const startMemory = performance.memory.totalJSHeapSize;

function parentFunction() {
  let parentVariable = 5;

  function childFunction() {
    let childVariable = 10;
    console.log(`parentVariable: ${parentVariable}`);
    console.log(`childVariable: ${childVariable}`);
    parentVariable++; // closure scope
    childVariable++; // 11
  }

  return childFunction;
}

const childFunction = parentFunction();
const childFunction2 = parentFunction();
// console.log("-----------First Time-----------")
// childFunction()
// console.log("-----------Second Time-----------")
// childFunction()
// console.log("-----------Third Time-----------")
// childFunction()
parentFunction();
