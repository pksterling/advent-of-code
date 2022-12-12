const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 10/input.txt", "utf-8")

let instructions = inputText.split("\n").map(e => e.split(" "))
let x = 1
let cycle = 0

let crt = instructions.reduce((rows, e) => {
  let cycles = e[0] == 'addx' ? 2 : 1

  for (let i = 0; i < cycles; i++) {
    rows[Math.floor(cycle / 40)] += Math.abs(cycle % 40 - x) < 2 ? "■" : " "

    cycle++
  }

  if (e[0] == 'addx') {
    x += Number(e[1])
  }

  return rows
}, ["", "", "", "", "", ""]).join("\n")

console.log(crt) // EGLHBLFJ
