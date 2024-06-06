// Prompt the user for their age
const age = parseFloat(prompt("Enter your age:"));

// Variable to hold the age category
let ageCategory;

// Determine the age category based on the input age
if (age < 13) {
  ageCategory = "Child";
} else if (age >= 13 && age <= 19) {
  ageCategory = "Teenager";
} else if (age >= 20) {
  ageCategory = "Adult";
} else {
  ageCategory = "Invalid";
}

// Display the result using alert
if (ageCategory !== "Invalid") {
  alert("You are a " + ageCategory);
} else {
  alert("Invalid age. Please enter a valid number.");
}
