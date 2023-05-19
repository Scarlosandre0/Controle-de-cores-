const colorPreviewEl = document.querySelector(".colorPreview");
const boxInputEls = document.querySelectorAll(".box input");
const colorCodeEl = document.querySelector("#colorCode");
const copyCodeBtnEl = document.querySelector(".copyCodeBtn");

function generateRGBColor() {
  const R = boxInputEls[0].value;
  const G = boxInputEls[1].value;
  const B = boxInputEls[2].value;
  colorPreviewEl.style.backgroundColor = `rgb(${R},${G},${B})`;
  colorCodeEl.value = `rgb(${R},${G},${B})`;
}

boxInputEls.forEach((e) => {
  e.addEventListener("input", generateRGBColor)
})

copyCodeBtnEl.addEventListener("click",()=> {
  if(!navigator.clipboard) {
    alert("Clipboard API is not available")
    return
  }
  else {
    const text = colorCodeEl.value;
    navigator.clipboard.writeText(text);
    copyCodeBtnEl.innerHTML = 'Copied to clipboard'
    setTimeout(() => {
      copyCodeBtnEl.innerHTML = "Copy Code"
    }, 2000)
  }
});

generateRGBColor();