// Prompt the user for their exam grade
const score = parseFloat(prompt("Enter your exam grade:"));

// Variable to hold the grade
let grade;

// Determine the grade based on the input score
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score < 90) {
  grade = "B";
} else if (score >= 70 && score < 80) {
  grade = "C";
} else if (score >= 60 && score < 70) {
  grade = "D";
} else if (score < 60) {
  grade = "F";
} else {
  grade = "Invalid";
}

// Display the result using alert
if (grade !== "Invalid") {
  alert("Your academic grade is: " + grade);
} else {
  alert("Invalid score. Please enter a number between 0 and 100.");
}
