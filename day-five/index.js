console.log('Hello from day five!');
const fs = require('fs');

const fileData = fs.readFileSync('testData.txt', 'utf-8');
const splitInput = fileData.split('\n');

let stackArray = [];
splitInput.forEach((line, index) => {
	Array.from(line).forEach((letter, indexOfLetter) => {
		if (new RegExp("[A-Z]").test(letter, indexOfLetter)) {
			stackArray[indexOfLetter].push(letter);
		}
	}) 
});
console.log(stackArray)

// The above gives me the letter and, more importantly, the index at which the letter appears in the array 
// Now poopulate a new array of letters based on the index at which they appear in the initial array