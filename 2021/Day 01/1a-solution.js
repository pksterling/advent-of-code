const fs = require("fs")
let inputText = fs.readFileSync("./1-input.txt", "utf-8")
let input = inputText.split("\n").map(Number)

var increases = 0

for (let i = 1; i < input.length; i++) {
  if (input[i] > input[i - 1]) {
    increases++
  }
}

console.log(increases)