const add = require('./index');

console.log("Running simple test...");

if (add(2, 3) !== 5) {
    console.error("Test Failed");
    process.exit(1);
}

console.log("Test Passed");
process.exit(0);
