console.log('Hello there, day two!')

let fs = require('fs');

const fileData = fs.readFileSync('initialData.txt', 'utf8',)
const newData = fileData.split("\n\n")
let stringArr = []
newData.map((item) => {
    let newItem = item.split("\n")
    stringArr.push(newItem)
})
let allNums = []
stringArr.map((eachArr) => {
    let totalNum = 0
    eachArr.map((stringNum) => {
        let num = parseInt(stringNum)
        totalNum += num
    })
    allNums.push(totalNum)
})

let numArrActual  = [] 
allNums.map((item) => {
    typeof item == NaN ? '' : numArrActual.push(item)
})

let biggestNum = 0
for(let i = 0; i < numArrActual.length; i++) {
    let num = numArrActual[i];
    if (num > biggestNum) {
        biggestNum = num
    }
}
console.log(biggestNum);
// Day one, first challenge: 69795

let topThree = numArrActual.sort((a, b) => a - b).slice(-4)

threeActual = []
topThree.map((item) => {
    isNaN(item) ? '' : threeActual.push(item)
})
console.log(threeActual)

let sumOfTopThree = 0
for(let i = 0; i < threeActual.length; i++) {
    let num = threeActual[i];
    sumOfTopThree += num
}
console.log(sumOfTopThree);
// Day one, second challenge: 208437