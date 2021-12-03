const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 10/10-input.txt", "utf-8")
let input = inputText.split("\n")
.map(e => parseInt(e))
.sort( (a, b) => a - b)

input.unshift(0)
var oneJolt = []
var tempAccumulator = 0
var accumulator = 1

function func(array, num = 0, prevI = 0, currI = 0, chain = "", isOuter = true) {
  var prev = array[prevI]
  var curr = array[currI]
  console.log[array]
  if (curr - prev > 3) {
    return true
  } else {
    if (!array[currI + 1]) {
      return true
    }
    if (array[currI + 1] - curr < 3) {
      for (let i = 1; ; i++) {
        if (func(oneJolt, num, currI, currI + i, chain, false)) {
          break
        }
      }
    } else {
      num++
    }
  }
  if(isOuter) {
    return num
  }
}

for (let i = 0; i < 100; i++) {
  var diff = input[i + 1] - input[i]
  if (diff == 1) {
    oneJolt.push(oneJolt.length)
    console.log(oneJolt)
  } else if (diff == 3) {
    tempAccumulator = func(oneJolt)
    if (tempAccumulator == 0) {
      tempAccumulator++
    }
    accumulator = accumulator * tempAccumulator
  }
}
console.log(accumulator)

const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 10/10-input.txt", "utf-8")
let input = inputText.split("\n")
.map(e => parseInt(e))
.sort( (a, b) => a - b)


function splitInputByTripleJolts(input, splitInput = []) {
  var splitIndex = input.findIndex( (current, index, array) => 
    current == array[index - 1] + 3
  )
  if (splitIndex >= 0) {
    var nextSplit = [...input]
    var nextInput = nextSplit.splice(splitIndex)
    splitInput.push(nextSplit)
    splitInput = splitInputByTripleJolts(nextInput, splitInput)
  }
  return splitInput
}
var splitInput = splitInputByTripleJolts(input)

function countArrangements