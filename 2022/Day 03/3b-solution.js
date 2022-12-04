const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 03/3-input.txt", "utf-8")

let alphabet =  [
  ...[...Array(26).keys()].map(i => String.fromCharCode(i + 97)),
  ...[...Array(26).keys()].map(i => String.fromCharCode(i + 65))
]

let rucksacks = inputText.split("\r\n")
let groups = []
for (let i = 0; i < rucksacks.length; i += 3) {
  groups.push(rucksacks.slice(i, i + 3).map(e => e.split("")))
}

let sumOfPrioritiesOfCommonItems = groups
  .map(e => alphabet.indexOf(
    e[0].filter(f => e[1].indexOf(f) != -1 && e[2].indexOf(f) != -1)[0]
  ) + 1)
  .reduce((sum, num) => sum + num)

console.log(sumOfPrioritiesOfCommonItems)