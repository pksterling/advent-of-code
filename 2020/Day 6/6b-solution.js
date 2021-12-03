const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 6/6-input.txt", "utf-8")
let input = inputText.split(/\n\s*\n/)

function splitAnswers(group) {
  return groupPeople = group.split("\n").map(person => person.match(/[a-z]/g))
}

function countGroupAnswers(group) {
  var groupCount = 0
  var groupPeople = splitAnswers(group)
  groupPeople[0].forEach(answer => {
    if(groupPeople.every(person => person.includes(answer))) {
      groupCount++
    }
  })
  return groupCount
}

var planeCount = input.reduce((sum, group) => 
  sum += countGroupAnswers(group)
, 0)
console.log(planeCount)