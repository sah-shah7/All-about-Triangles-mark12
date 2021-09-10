const angleForm = document.querySelector("#angleForm");
const inputAngles = document.querySelectorAll(".inputAngle");
const angleOutput = document.querySelector("#angleOutput");

let angleJS = [];

document.addEventListener("submit", angleFormHandler);

function angleFormHandler(e) {
  e.preventDefault();

  let sum = 0;

  sum =
    Number(inputAngles[0].value) +
    Number(inputAngles[1].value) +
    Number(inputAngles[2].value);

  if (sum === 180) {
    angleOutput.innerText = "🔺";
  } else {
    angleOutput.innerText = "Not a 🔺";
  }
}
