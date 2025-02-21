const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const clearIcon = document.getElementById("clear-icon");
const clearText = document.getElementById("clear-text");
var calculated = false;

function appendToDisplay(value) {
  if (value === "0" && display.value.length === 0) {
    display.value = "";
  } else {
    display.value += value;
  }
  changeClearButton();
  calculated = false;
}

function clearDisplay() {
  if (display.value.length < 1 || calculated === true) {
    display.value = "";
  } else {
    display.value = display.value.slice(0, -1);
  }
  changeClearButton();
}

function calculate() {
  const displayValue = display.value;

  if (displayValue === "") {
    return;
  }

  let result = 0;

  if (displayValue.includes("+")) {
    result = displayValue.split("+").reduce((a, b) => parseInt(a) + parseInt(b));
  } else if (displayValue.includes("-")) {
    result = displayValue.split("-").reduce((a, b) => parseInt(a) - parseInt(b));
  } else if (displayValue.includes("*")) {
    result = displayValue.split("*").reduce((a, b) => parseInt(a) * parseInt(b));
  } else if (displayValue.includes("/")) {
    result = displayValue.split("/").reduce((a, b) => parseInt(a) / parseInt(b));
  } else {
    result = parseInt(displayValue);
  }

  display.value = "";
  calculated = true;
  changeClearButton();
  console.log(calculated)

  display.value = result;
}

function changeClearButton() {
  if (display.value.length > 0 && display.value !== "0") {
    clearText.textContent = "";
    clearIcon.style.display = "block";
    console.log(calculated)
  } else if (calculated === true) {
    clearText.textContent = "CA";
    clearIcon.style.display = "none";
    console.log(calculated)
  } else {
    clearText.textContent = "CA";
    clearIcon.style.display = "none";
    console.log(calculated)
  }
}
