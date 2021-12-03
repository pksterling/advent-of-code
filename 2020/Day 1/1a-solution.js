const fs = require("fs")
let inputText = fs.readFileSync("./1-input.txt", "utf-8")
let input = inputText.split("\n").map(e => parseInt(e))

input.forEach(function(number, index) {
  for (let i = index + 1; i < input.length; i++) {
    if (number + input[i] == 2020) {
      var answer = number * input[i]
      console.log(answer)
      break
    }
  }
})