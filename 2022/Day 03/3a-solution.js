const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 03/3-input.txt", "utf-8")

let alphabet =  [
  ...[...Array(26).keys()].map(i => String.fromCharCode(i + 97)),
  ...[...Array(26).keys()].map(i => String.fromCharCode(i + 65))
]

let sumOfPrioritiesOfCommonItems = inputText.split("\r\n")
  .map(e => [
    e.slice(0, e.length / 2).split(""),
    e.slice(e.length / 2).split("")
  ])
  .map(e => alphabet.indexOf(e[0].filter(f => e[1].indexOf(f) != -1)[0]) + 1 )
  .reduce((sum, num) => sum + num)

console.log(sumOfPrioritiesOfCommonItems)