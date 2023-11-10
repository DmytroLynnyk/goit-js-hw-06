const fontSizeControl = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");
fontSizeControl.addEventListener("input", () => {
  spanText.style.setProperty("font-size", fontSizeControl.value + "px");
});
