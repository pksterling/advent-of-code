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

function findGammaRate(array) {
  var gammaRateBinary = ""
  for(var i = 0; i < array[0].length; i++) {
    gammaRateBinary += findModeOfIndex(array, i)
  }
  return gammaRateBinary
  // return parseInt(gammaRate, 2)
}

function findEpsilonRate(gammaRateBinary) {
  var epsilonRateBinary = ""
  for(var i = 0; i < gammaRateBinary.length; i++) {
    epsilonRateBinary += gammaRateBinary[i] == "0" ? "1" : "0"
  }
  return epsilonRateBinary
}

function calculatePowerConsumption(input) {
  var gammaRateBinary = findGammaRate(input)
  var epsilonRateBinary = findEpsilonRate(gammaRateBinary)
  var powerConsumption =
    parseInt(gammaRateBinary, 2) * parseInt(epsilonRateBinary, 2) 
    return powerConsumption
}

console.log(calculatePowerConsumption(input))