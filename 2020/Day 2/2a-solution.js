const fs = require("fs")
let inputText = fs.readFileSync("./2-input.txt", "utf-8")
let input = inputText.split("\n")

var validPasswordFrequency = 0

function checkPassword(string) {
  var splitString =  string.split(" ")
  var minFrequency = splitString[0].split("-")[0]
  var maxFrequency = splitString[0].split("-")[1]
  var requiredLetter = splitString[1][0]
  var password = splitString[2]
  var matchFrequency = password.split("").filter(letter => letter == requiredLetter).length

  if (matchFrequency >= minFrequency && matchFrequency <= maxFrequency) {
    validPasswordFrequency++
  }
}

input.forEach(checkPassword)
console.log(validPasswordFrequency)