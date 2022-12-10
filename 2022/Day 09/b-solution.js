const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 09/input.txt", "utf-8")

let instructions = inputText.split("\n").map(e => e.split(" "))
let tailPositions = ["00"]
let knots = Array(10).fill(0).map(_ => [0, 0])

instructions.forEach(command => {
  for (let i = 0; i < command[1]; i++) {
    switch(command[0]) {
      case 'R':
        knots[0][0]++
        break
        case 'L':
        knots[0][0]--
        break
        case 'U':
        knots[0][1]++
        break
        case 'D':
        knots[0][1]--
        break
    }

    for (let j = 1; j < knots.length; j++) {
      if (Math.abs(knots[j - 1][0] - knots[j][0]) > 1) {
        knots[j][0] += knots[j][0] < knots[j - 1][0] ? 1 : -1

        if (knots[j][1] > knots[j - 1][1]) {
          knots[j][1]--
        } else if (knots[j][1] < knots[j - 1][1]) {
          knots[j][1]++
        }
      }
      
      if (Math.abs(knots[j - 1][1] - knots[j][1]) > 1) {
        knots[j][1] += knots[j][1] < knots[j - 1][1] ? 1 : -1

        if (knots[j][0] > knots[j - 1][0]) {
          knots[j][0]--
        } else if (knots[j][0] < knots[j - 1][0]) {
          knots[j][0]++
        }
      }
    }

    tailPositions.push(knots[knots.length - 1].join(""))
  }
})

let numberOfUniquePositions = [...new Set(tailPositions)].length

console.log(numberOfUniquePositions)