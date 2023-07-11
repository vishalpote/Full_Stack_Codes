const os = require('os');

// Get the operating system platform
const platform = os.platform();
console.log(`Operating system platform: ${platform}`);

// Get the temporary file path
const tempFilePath = os.tmpdir();
console.log(`Temporary file path: ${tempFilePath}`);

// Get the home directory for the current user
const homeDir = os.homedir();
console.log(`Home directory for current user: ${homeDir}`);
