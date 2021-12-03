const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 8/8-input.txt", "utf-8")
let input = inputText.split("\n")

var instructions = input.map(instruction => {
  var operation = instruction.match(/\w{3}/)[0]
  var argument = parseInt(instruction.match(/[-+]\d*/))
  return [operation, argument]
})

function boot(instructions) {
  var acc = 0
  for(var i = 0; instructions[i][0] != 'stop'; i++) {
    var operation = instructions[i][0]
    var argument = instructions[i][1]
    if (operation == 'acc') {
      acc += argument
    } else if (operation == 'jmp') {
      i += argument - 1
    }
    instructions[i][0] = 'stop'
  }
  console.log(acc)
}

boot(instructions)