const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 02/2-input.txt", "utf-8")

let rounds = inputText.split(/\r\n/).map(e => e.split(" "))
let score = rounds.reduce((sum, round) => {
  switch(round[1]) {
    case 'X':
      sum += 0
      switch(round[0]) {
        case 'A':
          sum += 3
          break
        case 'B':
          sum += 1
          break
        case 'C':
          sum += 2
          break
      }
      break
    case 'Y':
      sum += 3
      switch(round[0]) {
        case 'A':
          sum += 1
          break
        case 'B':
          sum += 2
          break
        case 'C':
          sum += 3
          break
      }
      break
    case 'Z':
      sum += 6
      switch(round[0]) {
        case 'A':
          sum += 2
          break
        case 'B':
          sum += 3
          break
        case 'C':
          sum += 1
          break
      }
      break
  }

  return sum
}, 0)

console.log(score)