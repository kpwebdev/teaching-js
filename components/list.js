function list(listHeading, itemArray) {
  const h2AndUlVirtualDom = document.createDocumentFragment();

  const h2 = document.createElement("h2");
  h2.innerHTML = listHeading;

  const ul = document.createElement("ul");
  const ulVirtualDOM = document.createDocumentFragment();

  itemArray.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;

    ulVirtualDOM.appendChild(li);
  });

  ul.appendChild(ulVirtualDOM);

  h2AndUlVirtualDom.append(h2, ul);
  return h2AndUlVirtualDom;
}

export default list;
