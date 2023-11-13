const items = document.querySelectorAll("#categories .item");
items.forEach((item) => {
  const title = item.firstElementChild.textContent;
  console.log(`Categories: ${title}`);
  const numberOfElements = item.lastElementChild.children.length;
  console.log(`Elements: ${numberOfElements}`);
});
