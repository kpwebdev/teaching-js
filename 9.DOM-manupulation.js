// DOM access API(s)
const liSelectedById = document.getElementById("item1");
console.log(liSelectedById);

const manyLiSelectedByClassName = document.getElementsByClassName("special-li");
console.log(manyLiSelectedByClassName);

const allLiSelectedByTagName = document.getElementsByTagName("li");
console.log(allLiSelectedByTagName);

const liWithIdSelectedByQuery = document.querySelector("li#item1");
console.log(liWithIdSelectedByQuery);

// liWithIdSelectedByQuery.innerHTML = `
//   First root Li
//   <ul>
//     <li>Nested 1</li>
//     <li>Nested 2</li>
//     <li>Nested 3</li>
//   </ul>
// `;

function createNestedUlAndAppend() {
  liWithIdSelectedByQuery.innerHTML = "";
  const rootLiText = document.createTextNode("First root Li");
  const nestedUl = document.createElement("ul");

  const firstLi = document.createElement("li");
  const firstLiText = document.createTextNode("Nested 1");
  firstLi.appendChild(firstLiText);

  const secondLi = document.createElement("li");
  const secondLiText = document.createTextNode("Nested 2");
  secondLi.appendChild(secondLiText);

  const thirdLi = document.createElement("li");
  const thirdLiText = document.createTextNode("Nested 3");
  thirdLi.appendChild(thirdLiText);

  liWithIdSelectedByQuery.appendChild(rootLiText);

  nestedUl.appendChild(firstLi);
  nestedUl.appendChild(secondLi);
  nestedUl.appendChild(thirdLi);

  liWithIdSelectedByQuery.appendChild(nestedUl);
}

// setTimeout(createNestedUlAndAppend, 5000);

// it will give you all the element that were present when you call this method but whatever you add in the future will not be there
// if you want access whatever comes in the future use the children prop available on the parent
const allLiSelectedByQueryAll = document.querySelectorAll("li");
console.log(allLiSelectedByQueryAll);

const ul = document.querySelector("ul");
const constantlyUpdatedUlItems = ul.children;

// document fragment
function create20LiAfterDelay(delayInMs) {
  const liItemsFragments = document.createDocumentFragment();

  for (let i = 1; i <= 20; i++) {
    setTimeout(() => {
      const newLi = createLi(`Item from Loop ${i}`);
      liItemsFragments.appendChild(newLi);

      if (i >= 20) ul.appendChild(liItemsFragments);
    }, i * delayInMs);
  }
}

function createLi(liText) {
  const liTextNode = document.createTextNode(liText);
  const newLi = document.createElement("li");

  newLi.appendChild(liTextNode);

  return newLi;
}

// create20LiAfterDelay(1000);

// innerHTML
function showAndChangeInnerHTML() {
  const firstLi = ul.children[0];
  console.log("firstLi.innerHTML", firstLi.innerHTML);
  firstLi.innerHTML = "Item 1 is changed Now";
  console.log("firstLi.innerHTML (after change)", firstLi.innerHTML);
}
// innerText
function showAndChangeInnerText() {
  const secondLi = ul.children[1];
  console.log("secondLi.innerText", secondLi.innerText);
  secondLi.innerText = "Item 2 is changed Now";
  console.log("secondLi.innerText (after change)", secondLi.innerText);
}
// textContent
function showAndChangeTextContent() {
  const thirdLi = ul.children[2];
  console.log("thirdLi.textContent", thirdLi.textContent);
  thirdLi.textContent = "Item 3 is changed Now";
  console.log("thirdLi.textContent (after change)", thirdLi.textContent);
}

// showAndChangeInnerHTML();
// showAndChangeInnerText();
// showAndChangeTextContent();

function showUlWithInnerHTML() {
  console.log("ul.innerHTML", ul.innerHTML);
}
function showUlWithOuterHTML() {
  console.log("ul.outerHTML", ul.outerHTML);
}
function showUlWithInnerText() {
  console.log("ul.innerText", ul.innerText);
}
function showUlWithTextContent() {
  console.log("ul.textContent", ul.textContent);
}

// showUlWithInnerHTML();
// showUlWithOuterHTML();
// showUlWithInnerText();
// showUlWithTextContent();

// with append you can add many multiple types of nodes at once
function createAndAppendOnUl() {
  const newLi = document.createElement("li");
  newLi.textContent = "I am new";
  const textNodeOnRoot = document.createTextNode(
    "I am a text node on the root level of UL"
  );

  ul.append(textNodeOnRoot, "Text Before the newLi", newLi);
}

// createAndAppendOnUl();

// remove
function removeFirstLi() {
  const firstLi = ul.children[0];

  firstLi.remove();
}

// removeFirstLi();

// removeChild
// const ul2 = document
function removeChildFromUl() {
  const secondChild = ul.children[1];
  ul.removeChild(secondChild);
}
