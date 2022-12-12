const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 10/input.txt", "utf-8")

let instructions = inputText.split("\n").map(e => e.split(" "))
let x = 1
let cycleNum = 0

let sumOfSignalStrengths = instructions.reduce((sum, e) => {
  let cycles = e[0] == 'addx' ? 2 : 1

  for (let i = 0; i < cycles; i++) {
    cycleNum++

    if (cycleNum % 40 == 20) {
      sum += cycleNum * x
    }
  }

  if (e[0] == 'addx') {
    x += Number(e[1])
  }

  return sum
}, 0)

console.log(sumOfSignalStrengths)