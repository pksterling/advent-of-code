const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 05/5-input.txt", "utf-8")

let rows = inputText.split("\n\r\n")[0].split("\n")
let numberOfStacks = rows.pop().match(/\d/g).length
let stacks = []
for (let i = 0; i < numberOfStacks; i++) {
  stacks.push(rows.map(e => e[i * 4 + 1]).filter(e => e != ' '))
}
let procedure = inputText.split("\n\r\n")[1].split("\n")
  .map(e => e.match(/\d{1,}/g))

procedure.forEach(e =>
  stacks[e[2] - 1].unshift(...stacks[e[1] - 1].splice(0, e[0])))

let topCrates = stacks.map(e => e[0]).join("")

console.log(topCrates)