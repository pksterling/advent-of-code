const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 04/4-input.txt", "utf-8")

let overlappingPairs = inputText.split("\n")
  .map(e => e.split(",").map(e => e.split("-").map(Number)))
  .filter(e =>
    (e[0][0] <= e[1][0] && e[0][1] >= e[1][1]) ||
    (e[0][0] >= e[1][0] && e[0][0] <= e[1][1]) ||
    (e[0][1] >= e[1][0] && e[0][1] <= e[1][1])
  )
  .length

console.log(overlappingPairs)