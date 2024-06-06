 // Prompt the user for their membership type
 const membershipType = prompt("Enter your membership type (Basic, Silver, Gold):").trim().toLowerCase();

 // Variable to hold the membership benefits
 let benefits;

 // Determine the benefits based on the membership type
 if (membershipType === 'basic') {
     benefits = 'Access to basic content';
 } else if (membershipType === 'silver') {
     benefits = 'Access to silver content';
 } else if (membershipType === 'gold') {
     benefits = 'Access to all content';
 } else {
     benefits = 'Invalid membership type. Please enter Basic, Silver, or Gold.';
 }

 // Display the result using alert
 alert(benefits);