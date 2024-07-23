function hero(heroTextContent) {
  const heroSection = document.createElement("section");
  heroSection.innerHTML = heroTextContent;

  return heroSection;
}

export default hero;
