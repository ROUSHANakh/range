const minInput = document.querySelector(".min-input");
const maxInput = document.querySelector(".max-input");
const minRange = document.querySelector(".min-range");
const maxRange = document.querySelector(".max-range");

  function syncMinRange() {
    const minValue = parseInt(minInput.value);
  const maxValue = parseInt(maxInput.value);


  if (minValue >= maxValue) {
    minInput.value = maxValue - 1;
  }
  minRange.value = minInput.value;
}

function syncMaxRange() {
   const minValue = parseInt(minInput.value);
   const maxValue = parseInt(maxInput.value);

    if (maxValue <= minValue) {
     maxInput.value = minValue + 1;
  }
   maxRange.value = maxInput.value;
}

minInput.addEventListener("input", syncMinRange);
maxInput.addEventListener("input", syncMaxRange);

minRange.addEventListener("input", () => {
   const minValue = parseInt(minRange.value);
  const maxValue = parseInt(maxRange.value);

  
   if (minValue >= maxValue) {
     minRange.value = maxValue - 1;
  }
   minInput.value = minRange.value;
});

maxRange.addEventListener("input", () => {
  const minValue = parseInt(minRange.value);
  const maxValue = parseInt(maxRange.value);

    if (maxValue <= minValue) {
    maxRange.value = minValue + 1;
  }
  maxInput.value = maxRange.value;
});
