console.log('Hello from day four!')
const fs = require('fs');

const fileData = fs.readFileSync('initialData.txt', 'utf8')
const newData = fileData.split("\n")

let containsArray = []

newData.forEach(item => {
    const firstIdSet = item.split(',')[0] 
    const secondIdSet = item.split(',')[1] 
    const firstRange = getRange(parseInt(firstIdSet.split('-')[0]), parseInt(firstIdSet.split('-')[1]))
    const secondRange = getRange(parseFloat(secondIdSet.split('-')[0]), parseInt(secondIdSet.split('-')[1]))
    
    let includedIn = false
    firstRange.forEach(itemInRange => {
        if (secondRange.includes(itemInRange) && !includedIn) {
            containsArray.push({firstRange, secondRange})
            includedIn = true
        }
    })
    
    // First array logic
    // if (firstRange[0] >= secondRange[0] && firstRange[firstRange.length - 1] <= secondRange[secondRange.length -1]) {
    //     containsArray.push({firstRange, secondRange})
    //     return
    // }
    
    // Second array logic
    // if (secondRange[0] >= firstRange[0] && secondRange[secondRange.length - 1] <= firstRange[firstRange.length -1]) {
    //     containsArray.push({firstRange, secondRange})
    // }
})

console.log('Contains array', containsArray)
console.log('Contains array length:', containsArray.length)

// Get range function
function getRange(start, end) {
    let range = []
    for (let i = start; i <= end; i++) {
        range.push(i)
    }
    return range
}
