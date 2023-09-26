const fs = require("fs");

const fileData = fs.readFileSync("testData.txt", "utf-8");
const [stackData, instructionsData] = fileData.split("\n\n");
console.log(stackData.split("\n"));

// stackData.forEach((line) => {
//     console.log(line);
// });

// First, split the input data in order to separate the stack data itself from the instructions.
// I can do this by spliting the input data by the blank line.
