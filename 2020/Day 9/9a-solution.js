const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 9/9-input.txt", "utf-8")
let input = inputText.split("\n").map(e => parseInt(e))

for (let i = 25; ; i++) {
  var hasMatch = false
  for (let j = i - 25; j < i - 1; j++) {
    for (let k = i - 24; k < i; k++) {
      if (input[i] == input[j] + input[k]) {
        hasMatch = true
        break
      }
    }
    if (hasMatch == true) {
      break
    }
  }
  if (hasMatch == false) {
    console.log(input[i])
    break
  }
}