console.log('Hello there, day two!')
let fs = require('fs');

// The first column is the opponent; the second column is me. 

// A = rock, 1 point
// B = paper, 2 points 
// C = scissors, 3 points

// X = rock, 1 point
// Y = paper, 2 points
// Z = scissors, 3 points

// Win = 6 
// Draw = 3
// Loss = 0

const fileData = fs.readFileSync('initialData.txt', 'utf8',)
const newData = fileData.split("\n")

let totalScore = 0

// function gameLogic(oppResult, myResult) {
//     // Draw
//     if (oppResult === 'A' && myResult === 'X') {
//         console.log('This game is a draw.')
//         totalScore += 4
//     } else if (oppResult === 'B' && myResult === 'Y') {
//         console.log('This game is a draw.')
//         totalScore += 5
//     } else if (oppResult === 'C' && myResult === 'Z') {
//         console.log('This game is a draw.')
//         totalScore += 6
//     }
//     // Opponent wins
//     if (oppResult === 'A' && myResult === 'Z') {
//         console.log('Your opponent won.')
//         totalScore += 3
//     } else if (oppResult === 'B' && myResult === 'X') {
//         console.log('Your opponent won.')
//         totalScore += 1
//     } else if (oppResult === 'C' && myResult === 'Y') {
//         console.log('Your opponent won.')
//         totalScore += 2
//     }
//     // You win
//     if (oppResult === 'A' && myResult === 'Y') {
//         console.log('You won.')
//         totalScore += 8 
//     } else if (oppResult === 'B' && myResult === 'Z') {
//         console.log('You won.')
//         totalScore += 9 
//     } else if (oppResult === 'C' && myResult === 'X') {
//         console.log('You won.')
//         totalScore += 7 
//     }
// }

// newData.map((item) => {
//     let newItem = item.split(' ')
//     gameLogic(newItem[0], newItem[1]) 
// }) 

// console.log(totalScore)

// 14531

// Outcomes

// X = lose
// Y = draw
// Z = win

// A = rock, 1 point
// B = paper, 2 points 
// C = scissors, 3 points

// X = rock, 1 point
// Y = paper, 2 points
// Z = scissors, 3 points

// Win = 6 
// Draw = 3
// Loss = 0

function gameStrat(oppChoice, outcome) {
    // Lose
    if (outcome === 'X') {
        if (oppChoice === 'A') {
            console.log('You lose.')
            totalScore += 3
        } else if (oppChoice === 'B') {
            console.log('You lose.')
            totalScore += 1
        } else if (oppChoice === 'C') {
            console.log('You lose.')
            totalScore += 2
        } 
    }
    // Draw 
    if (outcome === 'Y') {
        if (oppChoice === 'A') {
            console.log(`The game is a draw. The outcome was ${outcome}`)
            totalScore += 4
        } else if (oppChoice === 'B') {
            console.log(`The game is a draw. The outcome was ${outcome}`)
            totalScore += 5
        } else if (oppChoice === 'C') {
            console.log(`The game is a draw. The outcome was ${outcome}`)
            totalScore += 6
        } 
    }
    // Win
    if (outcome === 'Z') {
        if (oppChoice === 'A') {
            console.log('You win.')
            totalScore += 8
        } else if (oppChoice === 'B') {
            console.log('You win.')
            totalScore += 9
        } else if (oppChoice === 'C') {
            console.log('You win.')
            totalScore += 7
        } 
    }
}

newData.map((item) => {
    let newItem = item.split(' ')
    gameStrat(newItem[0], newItem[1])
    // console.log(newItem[0], newItem[1])
}) 

console.log(totalScore)

// 11258