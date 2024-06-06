// Identifiy the variable

let firstNumber = parseFloat(prompt("Please Enter The temperature ..."));
// events

if (firstNumber < 20) {
  alert("Weather is COLD.");
}
 else if (firstNumber >= 20 && firstNumber < 30) {
  alert("Weather is WARM.");
}
else if (firstNumber >= 30) {
  alert("Weather is HOT.");
}

