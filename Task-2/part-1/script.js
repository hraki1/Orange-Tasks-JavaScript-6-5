   // Prompt the user for a number
   const number = parseInt(prompt("Enter a number:"), 10);

   // Variable to hold the result
   let result;

   // Check if the number is even or odd
   if (!isNaN(number)) {
       if (number % 2 === 0) {
           result = 'The number ' + number + ' is even.';
       } else {
           result = 'The number ' + number + ' is odd.';
       }
   } else {
       result = 'Invalid input. Please enter a valid number.';
   }

   // Display the result using alert
   alert(result);