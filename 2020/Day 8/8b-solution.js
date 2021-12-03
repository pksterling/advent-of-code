const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 8/8-input.txt", "utf-8")
let input = inputText.split("\n")

function processInput() {
  return input.map(instruction => {
    var operation = instruction.match(/\w{3}/)[0]
    var argument = parseInt(instruction.match(/[-+]\d*/))
    return [operation, argument]
  })
}

function boot(instructions) {
  var acc = 0
  for (var i = 0; i < instructions.length; i++) {
    var operation = instructions[i][0]
    var argument = instructions[i][1]
    if (operation == 'acc') {
      acc += argument
    } else if (operation == 'jmp') {
      i += argument - 1
    } else if (operation == 'stop') {
      return false
    }
    instructions[i][0] = 'stop'
  }
  return "Boot complete. Answer is " + acc
}

function swapOperation(operation) {
  if (operation == 'nop') {
    return 'jmp'
  } else if (operation == 'jmp') {
    return 'nop'
  } else {
    return operation
  }
}

for (let i = 0; i < input.length; i++) {
  var instructions = processInput()
  instructions[i][0] = swapOperation(instructions[i][0])
  console.log(i)
  var result = boot(instructions)
  if (result) {
    console.log(result)
    return
  }
}