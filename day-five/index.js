console.log("Hello from day five!");
const fs = require("fs");

const fileData = fs.readFileSync("testData.txt", "utf-8");
const splitInput = fileData.split("\n");

splitInput.forEach((line) => {
    console.log(line);
});
