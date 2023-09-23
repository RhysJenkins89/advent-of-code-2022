console.log('Hello from day three!')
const fs = require('fs');

const fileData = fs.readFileSync('initialData.txt', 'utf8',)
const newData = fileData.split("\n")

// let totalNum = 0
// newData.map((item) => {
//     let firstHalf = item.slice(0, item.length / 2)
//     let secondHalf = item.slice(item.length / 2)
//     console.log(firstHalf)
//     console.log(secondHalf)
//     let firstCompartmentItems = Array.from(firstHalf)
//     let itemPriority = 0;
//     firstCompartmentItems.map((item) => { 
//         if (itemPriority !== 0) {
//             return;
//         }
//         if (secondHalf.includes(item)) {
//             console.log(`Item in both halves: ${item}.`)
//             if (item.toUpperCase() === item) {
//                 const num = item.charCodeAt(0) - 64 + 26
//                 console.log('Upper: ', item, num)
//                 itemPriority = num
//                 console.log(totalNum)
//             } else {
//                 const num = item.charCodeAt(0) - 96
//                 console.log('Lower: ', item, num)
//                 itemPriority = num 
//                 console.log(totalNum)
//             }
//         }
//     })
//     totalNum += itemPriority;
// })
// console.log(totalNum)

// 10160 

// let total = 0;
// Depth first traversal of graph
// function searchTree(rootNode) {
//     if (rootNode.value % 2 == 0) {
//         total += rootNode.value;
//     }
//     for (child of rootNode.children) {
//         searchTree(child);
//     }
// }

// console.log('New data:')
// console.log(newData)

let badgesArray = []

let newArrayData = []

const chunkSize = 3;
for (let i = 0; i < newData.length; i += chunkSize) {
    const chunk = newData.slice(i, i + chunkSize);
    newArrayData.push(chunk)
}

console.log('New array data:')
console.log(newArrayData)
console.log('New array data length:')
console.log(newArrayData.length)

newArrayData.forEach((rucksackGrouping) => {
    // This logic won't work if the array doesn't contain three elements.
    let firstRucksack = Array.from(rucksackGrouping[0])
    let itemExists = false
    firstRucksack.forEach((item) => {
        if (!itemExists) {
            if (Array.from(rucksackGrouping[1]).includes(item) && Array.from(rucksackGrouping[2]).includes(item)) {
                badgesArray.push(item)
                console.count('Number of array pushes')
                itemExists = true
            }
        }
    })
    console.count('each array item')
})

console.log('Badges:')
console.log(badgesArray)
console.log('Badges array length:')
console.log(badgesArray.length)

const badgeNumbers = badgesArray.map((item) => {
    if (item.toUpperCase() === item) {
        // console.log('char code:')
        // console.log(item.charCodeAt(0) - 64 + 26)
        return item.charCodeAt(0) - 64 + 26
    } else {
        // console.log('char code:')
        // console.log(item.charCodeAt(0) - 96)
        return item.charCodeAt(0) - 96
    }
}) 

console.log('Badge numbers:')
console.log(badgeNumbers)
console.log('Badge numbers length:')
console.log(badgeNumbers.length)

let totalBadgeNums = 0
badgeNumbers.forEach((num) => {
    totalBadgeNums += num
})

console.log('totalBadgeNums:')
console.log(totalBadgeNums)