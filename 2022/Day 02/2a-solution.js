const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 02/2-input.txt", "utf-8")

let rounds = inputText.split(/\r\n/).map(e => e.split(" "))
let score = rounds.reduce((sum, round) => {
  switch(round[1]) {
    case 'X':
      sum += 1
      switch(round[0]) {
        case 'B':
          break
        case 'A':
          sum += 3
          break
        case 'C':
          sum += 6
          break
      }
      break
    case 'Y':
      sum += 2
      switch(round[0]) {
        case 'C':
          break
        case 'B':
          sum += 3
          break
        case 'A':
          sum += 6
          break
      }
      break
    case 'Z':
      sum += 3
      switch(round[0]) {
        case 'A':
          break
        case 'C':
          sum += 3
          break
        case 'B':
          sum += 6
          break
      }
      break
  }

  return sum
}, 0)

console.log(score)