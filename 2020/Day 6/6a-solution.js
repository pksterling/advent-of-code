const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 6/6-input.txt", "utf-8")
let input = inputText.split(/\n\s*\n/)

function countGroupAnswers(group) {
  var answers = group.match(/[a-z]/g)
  var uniqueAnswers = []

  answers.forEach(answer => {
    if (!uniqueAnswers.includes(answer)) {
      uniqueAnswers.push(answer)
    }
  })
  return uniqueAnswers.length
}

var planeCount = input.reduce((sum, group) => 
  sum += countGroupAnswers(group)
, 0)
console.log(planeCount)