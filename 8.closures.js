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
