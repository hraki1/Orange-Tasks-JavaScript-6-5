// Prompt the user for values of x and y
const x = parseFloat(prompt("Enter the value of x:"));
const y = parseFloat(prompt("Enter the value of y:"));

// Get the HTML element to display the result
const resultElement = document.getElementById("result");

// Compare x and y and display the appropriate message
if (x > y) {
  alert("Hello World");
  console.log("Hello World");
  resultElement.innerText = "Hello World";
} else {
  alert("Goodbye");
  console.log("Goodbye");
  resultElement.innerText = "Goodbye";
}
