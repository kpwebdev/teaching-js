import ReactDom from "./libs/react-dom.js";

// components
import header from "./components/header.js";
import hero from "./components/hero.js";
import footer from "./components/footer.js";
import list from "./components/list.js";

const root = ReactDom.createRoot(document.getElementById("root"));

const friends = ["Sai Prasad", "Shaizan", "Anky", "Mohit"];
const skills = ["HTML", "CSS", "JS"];

root.render(
  hero("I am superman"),
  header("I am KP"),
  footer("&copy; 2024 Facebook. All rights are reserved."),
  header("I am Sai Prasad"),
  footer("&copy; 2024 Google. All rights are reserved."),
  hero("I am batman"),
  list("My friends", friends),
  list("My Skills", skills)
);

// root.render(
//   (function hero(heroTextContent) {
//     const heroSection = document.createElement("section");
//     heroSection.innerHTML = heroTextContent;

//     return heroSection;
//   })("I am superman"),
//   (function header(headerText) {
//     const h1 = document.createElement("h1");
//     h1.innerHTML = headerText;

//     return h1;
//   })("I am KP"),
//   (function footer(footerTextContent) {
//     const footerElement = document.createElement("footer");
//     footerElement.innerHTML = footerTextContent;

//     return footerElement;
//   })("&copy; 2024 Facebook. All rights are reserved."),
//   (function header(headerText) {
//     const h1 = document.createElement("h1");
//     h1.innerHTML = headerText;

//     return h1;
//   })("I am Sai Prasad"),
//   (function footer(footerTextContent) {
//     const footerElement = document.createElement("footer");
//     footerElement.innerHTML = footerTextContent;

//     return footerElement;
//   })("&copy; 2024 Google. All rights are reserved."),
//   (function hero(heroTextContent) {
//     const heroSection = document.createElement("section");
//     heroSection.innerHTML = heroTextContent;

//     return heroSection;
//   })("I am batman"),
//   // list("My friends", friends),
//   (function list(listHeading, itemArray) {
//     const h2AndUlVirtualDom = document.createDocumentFragment();

//     const h2 = document.createElement("h2");
//     h2.innerHTML = listHeading;

//     const ul = document.createElement("ul");
//     const ulVirtualDOM = document.createDocumentFragment();

//     itemArray.forEach((item) => {
//       const li = document.createElement("li");
//       li.innerHTML = item;

//       ulVirtualDOM.appendChild(li);
//     });

//     ul.appendChild(ulVirtualDOM);

//     h2AndUlVirtualDom.append(h2, ul);
//     return h2AndUlVirtualDom;
//   })("My friends", friends),
//   (function list(listHeading, itemArray) {
//     const h2AndUlVirtualDom = document.createDocumentFragment();

//     const h2 = document.createElement("h2");
//     h2.innerHTML = listHeading;

//     const ul = document.createElement("ul");
//     const ulVirtualDOM = document.createDocumentFragment();

//     itemArray.forEach((item) => {
//       const li = document.createElement("li");
//       li.innerHTML = item;

//       ulVirtualDOM.appendChild(li);
//     });

//     ul.appendChild(ulVirtualDOM);

//     h2AndUlVirtualDom.append(h2, ul);
//     return h2AndUlVirtualDom;
//   })("My Skills", skills)
// );
