function footer(footerTextContent) {
  const footerElement = document.createElement("footer");
  footerElement.innerHTML = footerTextContent;

  return footerElement;
}

export default footer;
