const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 7/7-input.txt", "utf-8")
let input = inputText.split("\n")

function processRule(rule) {
  var processedRule = {}
  processedRule.outerBag = rule.match(/^\w*\s\w*/)[0]
  processedRule.innerBags = rule.match(/(?<=\d\s)\w*\s\w*/g)
  if (!processedRule.innerBags) {
    processedRule.innerBags = []
  }
  return processedRule
}
var ruleObjectsArray = input.map(rule => processRule(rule))

function findEventualGolds(ruleObjectsArray, eventualGolds = []) {
  var checkAgain = false

  ruleObjectsArray.forEach(rule => {
    if ((
      rule.innerBags.includes("shiny gold")
      || rule.innerBags.some(innerBag => eventualGolds.includes(innerBag)))
      && !eventualGolds.includes(rule.outerBag)
    ) {
      eventualGolds.push(rule.outerBag)
      checkAgain = true
    }
  })

  if (checkAgain) {
    findEventualGolds(ruleObjectsArray, eventualGolds)
  }
  return eventualGolds
}

console.log(findEventualGolds(ruleObjectsArray))