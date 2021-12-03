const fs = require("fs")
let inputText = fs.readFileSync("./2-input.txt", "utf-8")
let input = inputText.split("\n")

var validPasswordFrequency = 0

function checkPassword(string) {
  var splitString =  string.split(" ")
  var indexOne = splitString[0].split("-")[0] - 1
  var indexTwo = splitString[0].split("-")[1] - 1
  var requiredLetter = splitString[1][0]
  var password = splitString[2]

  if ((password[indexOne] == requiredLetter) != (password[indexTwo] == requiredLetter)) {
    validPasswordFrequency++
  }
}

input.forEach(checkPassword)
console.log(validPasswordFrequency)