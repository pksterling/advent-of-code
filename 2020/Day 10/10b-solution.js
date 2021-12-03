const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 10/10-input.txt", "utf-8")
let input = inputText.split("\n")
.map(e => parseInt(e))
.sort( (a, b) => a - b)

input.unshift(0)
input.push(input[input.length - 1] + 3)


function splitInputByTripleJolts(input, splitInput = []) {
  var splitIndex = input.findIndex( (current, index, array) => 
    current == array[index - 1] + 3
  )
  var nextSplit = [...input]
  if (splitIndex >= 0) {
    var nextInput = nextSplit.splice(splitIndex)
    splitInput.push(nextSplit)
    splitInput = splitInputByTripleJolts(nextInput, splitInput)
  } else {
    splitInput.push(nextSplit)
  }
  return splitInput
}
var splitInput = splitInputByTripleJolts(input)

function countArrangements( array, currentIndex = 0, nextIndex = 0, arrangements = 0) {
  if (!array[nextIndex + 1]) {
    arrangements++
    return arrangements
  } 
  if (array[nextIndex] - array[currentIndex] <= 3) {
    for (let i = 1; i <= 3; i++) {
      if (array[nextIndex + i]) {
        arrangements = countArrangements(array, nextIndex, nextIndex + i, arrangements)
      }
    }
  }
  return arrangements
}

var result = splitInput.reduce( (total, current) => 
  countArrangements(current) * total,
1)

console.log(result)