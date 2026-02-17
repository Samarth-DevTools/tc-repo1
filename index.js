function add(a, b) {
    return a + b;
}

if (require.main === module) {
    console.log("Hello from TeamCity Node.js Pipeline!");
}

module.exports = add;