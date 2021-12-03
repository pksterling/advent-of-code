const fs = require("fs")
let inputText = fs.readFileSync("./3-input.txt", "utf-8")
let input = inputText.split("\r\n")

function findModeOfIndex(array, checkIndex) {
  var indexScore = array.reduce((count, binaryNumber) => {
    if (binaryNumber[checkIndex] == 0) {
      return count - 1
    } else {
      return count + 1
    }
  }, 0)
  if (indexScore < 0) {
    return "0"
  } else {
    return "1"
  }
}

function findOxygenGeneratorRating(array, index = 0) {
  if (array.length === 1) {
    return array[0]
  }

  var mode = findModeOfIndex(array, index)

  array = array.filter(binaryNumber => {
    return binaryNumber[index] == mode
  })

  return findOxygenGeneratorRating(array, index + 1)
}

function findco2Rating(array, index = 0) {
  if (array.length === 1) {
    return array[0]
  }

  var mode = findModeOfIndex(array, index)
  var antiMode = mode =="0" ? "1" : "0"

  array = array.filter(binaryNumber => {
    return binaryNumber[index] == antiMode
  })

  return findco2Rating(array, index + 1)
}

function calculateLifeSupportRating(input) {
  var oxygenRating = findOxygenGeneratorRating(input)
  var co2rating = findco2Rating(input)
  var lifeSupportRating =
    parseInt(oxygenRating, 2) * parseInt(co2rating, 2) 
    return lifeSupportRating
}

console.log(calculateLifeSupportRating(input));