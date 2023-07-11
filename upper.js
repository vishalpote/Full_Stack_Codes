const readline = require('readline');

// Create readline interface for getting user input from console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for their name
rl.question("What's your name? ", (name) => {
  // Convert name to upper case letters
  const upperCaseName = name.toUpperCase();
  
  // Print greeting message with upper case name
  console.log(`Hello, ${upperCaseName}, nice to meet you!`);
  
  // Close readline interface
  rl.close();
});
