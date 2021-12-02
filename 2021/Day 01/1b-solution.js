const fs = require("fs")
let inputText = fs.readFileSync("./1-input.txt", "utf-8")
let input = inputText.split("\n").map(Number)

var increases = 0

for (var i = 3; i < input.length; i++) {
  var a = input[i] + input[i - 1] + input[i - 2]
  var b = input[i - 1] + input[i - 2] + input[i - 3]
  if (a > b) {
    increases++
  }
}

console.log(increases)

