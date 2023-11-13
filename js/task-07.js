const fontSizeControl = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

// // Option #1
// spanText.style.fontSize = 56 + "px";
// fontSizeControl.addEventListener("input", () => {
//   spanText.style.setProperty("font-size", fontSizeControl.value + "px");
// });

// // Option #2
spanText.style.fontSize = 56 + "px";
fontSizeControl.addEventListener("input", () => {
  spanText.style.fontSize = fontSizeControl.value + "px";
});
