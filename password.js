// Importing required modules
const readline = require('readline');
const { promisify } = require('util');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = promisify(rl.question).bind(rl);
async function checkLogin() {
  const name = await question('Enter your name: ');
  const password = await question('Enter your password: ');
  if (name === 'vishal' && password === '12345') {
    console.log('Login successful');
  } else {
    throw new Error('Login failed');
  }
}
checkLogin()
  .then(() => rl.close())
  .catch((error) => console.error(error.message));
