const convertBtn = document.getElementById("convert-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("output");
const input = document.getElementById("number");

convertBtn.addEventListener("click", () => {
  if(!input.value) {
    output.innerHTML = `<p>Please enter a valid number</p>`;
  } else if (input.value <= 0) {
    output.innerHTML = `<p>Please enter a number greater than or equal to 1</p>`;
  } else if (input.value >= 4000) {
    output.innerHTML = `<p>Please enter a number less than or equal to 3999</p>`;
  } else {
    output.innerHTML += convert(input.value);
    input.value = "";
  }
})

clearBtn.addEventListener("click", () => {
  input.value = "";
  output.innerHTML = "";
})

const convert = (number) => {
  let resultString = "";
  let num = parseInt(number);
  for(let key in romans) {
    while(num >= romans[key]) {
      resultString += key;
      num -= romans[key];
    }
  }
  return `<p>${number} = ${resultString}</p>`;
}

const romans = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1
}