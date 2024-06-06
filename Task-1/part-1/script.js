// Identifiy the variable

let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let opreator = document.getElementById("opreator");
let btn = document.getElementById("btn");

console.log(opreator.value);

btn.onclick = Run;

function Run() {
  var result;
  let fNumber = +firstNumber.value;
  let sNumber = +secondNumber.value;
  console.log(fNumber - sNumber);
  if (opreator.value === "+") {
    result = fNumber + sNumber;
  } else if (opreator.value === "-") {
    result = fNumber - sNumber;
  } else if (opreator.value === "*") {
    result = fNumber * sNumber;
  } else if (opreator.value === "/") {
    result = fNumber / sNumber;
  } else {
    result = "Please Enter Vaild Opreator ( + , - , / , * ) ";
  }

  let results = document.createElement("h2");
  let resultText = document.createTextNode(result);
  results.appendChild(resultText);

  document.querySelector(".page").appendChild(results);
}
