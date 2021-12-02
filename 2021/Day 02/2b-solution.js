const fs = require("fs")
let inputText = fs.readFileSync("./2-input.txt", "utf-8")
let input = inputText.split("\r\n").map(instruction => {
  instruction = instruction.split(" ")
  return [instruction[0], Number(instruction[1])]
})

var x = 0
var y = 0
var aim = 0

input.forEach(input => {
  if (input[0] == 'forward') {
    x += input[1]
    y += input[1] * aim
  } else if (input[0] == 'down') {
    aim += input[1]
  } else if (input[0] == 'up') {
    aim -= input[1]
  }
})

var result = x * y

console.log(result)
