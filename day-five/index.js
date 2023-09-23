console.log("Hello from day five!");
const fs = require("fs");

const fileData = fs.readFileSync("testData.txt", "utf-8");
const splitInput = fileData.split("\n");

splitInput.forEach((line) => {
    console.log(line);
});

// First, split the input data in order to separate the stack data itself from the instructions.
// I can do this by spliting the input data by the blank line.
