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
