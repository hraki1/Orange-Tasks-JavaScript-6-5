let objectMark = document.getElementById("mark");
let btn = document.getElementById("btn");
let result;

// Event section
btn.onclick = Run;

function Run() {
  let mark = +objectMark.value; // Update 'mark' here to get the latest value.
  console.log(mark);

  if (mark > 0 && mark < 50) {
    result = "FAIL";
  } else if (mark >= 50 && mark < 59) {
    result = "D";
  } else if (mark >= 60 && mark < 69) {
    result = "C";
  } else if (mark >= 70 && mark < 79) {
    result = "B";
  } else if (mark >= 80 && mark < 89) {
    result = "A";
  } else if (mark >= 90 && mark <= 100) { // Fix the condition for 'A++'
    result = "A++";
  } else {
    result = "please Enter Number between 0 - 100";
  }

  let results = document.createElement("h2");
  let resultText = document.createTextNode(result);
  results.appendChild(resultText);
  document.querySelector(".page").appendChild(results);
}
