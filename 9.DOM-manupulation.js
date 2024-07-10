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

setTimeout(createNestedUlAndAppend, 5000);

// it will give you all the element that were present when you call this method but whatever you add in the future will not be there
// if you want access whatever comes in the future use the children prop available on the parent
const allLiSelectedByQueryAll = document.querySelectorAll("li");
console.log(allLiSelectedByQueryAll);

const ul = document.querySelector("ul");
const constantlyUpdatedUlItems = ul.children;
