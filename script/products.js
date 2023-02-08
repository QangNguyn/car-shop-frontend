// range price

let rangeInput = document.querySelectorAll(
  ".filter-form__form--range-price input"
);
let rangeText = document.querySelectorAll(".range-price__text div");
let progress = document.querySelector(".range-price__progress");
let priceMax = rangeInput[0].max;
let priceGap = 300000000;

rangeInput.forEach((input) => {
  input.addEventListener("input", (event) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (event.target.className === "min-range") {
        minVal = rangeInput[0].value = maxVal - priceGap;
      } else {
        maxVal = rangeInput[1].value = minVal + priceGap;
      }
    }

    let positionMin = (minVal / priceMax) * 100;
    let positionMax = 100 - (maxVal / priceMax) * 100;
    progress.style.left = positionMin + "%";
    progress.style.right = positionMax + "%";
    rangeText[0].innerText = minVal.toLocaleString();
    rangeText[1].innerText = maxVal.toLocaleString();
  });
});
