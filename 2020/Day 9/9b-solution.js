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
    var invalidNumber = input[i]
    break
  }
}

function findContiguousNumbers(index, numbers = []) {
  numbers.push(input[index])
  let sum = numbers.reduce( (sum, number) => sum + number)

  if (numbers.length > 1 && sum == invalidNumber) {
    return numbers
  } else if (sum > invalidNumber) {
    return false
  }

  return findContiguousNumbers(index + 1, numbers)
}

for (let i = 0; i < input.length - 1; i++) {
  var foundNumbers = findContiguousNumbers(i)
  if (foundNumbers) {
    break
  }
}

var sortedNumbers = foundNumbers.sort( (a, b) => a - b)
var result = sortedNumbers[0] + sortedNumbers[sortedNumbers.length - 1]
console.log(result)