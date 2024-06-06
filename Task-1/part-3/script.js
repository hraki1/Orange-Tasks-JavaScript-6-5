// Define a constant for π
const PI = Math.PI;

// Function to calculate the circumference of a circle
function calculateCircumference(radius) {
  return 2 * PI * radius;
}

// Example usage
let objectRadius = document.getElementById("radius");
let btn = document.getElementById("btn");

// Event section
btn.onclick = Run;

function Run() {
  const radius = 5;
  const circumference = calculateCircumference(radius);

  //   Create element

  let result = `The circumference of a circle with radius ${radius} is ${circumference}`;
  let results = document.createElement("h2");
  let resultText = document.createTextNode(result);
  results.appendChild(resultText);
  document.querySelector(".page").appendChild(results);
}