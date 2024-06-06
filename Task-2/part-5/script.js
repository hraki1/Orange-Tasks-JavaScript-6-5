// Identifiy the variable

let firstNumber = parseFloat(prompt("Please Enter First Number ..."));
let secondNumber = parseFloat(prompt("Please Enter Second Number ..."));
// events

let result;

if (firstNumber < secondNumber) {
  result = "Second Number is largest" + secondNumber;
} else if (firstNumber > secondNumber) {
  result = "First Number is largest" + firstNumber;
} else {
  result = "Both are Equal";
}

if (result === NaN) {
  alert("Please re-fill the prompt");
} else {
  alert(result);
}
