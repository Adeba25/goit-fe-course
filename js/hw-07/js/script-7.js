const inputFontSizeControl = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

inputFontSizeControl.addEventListener("input", () => {
  outputText.setAttribute("style", `font-size:${inputFontSizeControl.value}px`);
});
