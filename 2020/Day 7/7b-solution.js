const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 7/7-input.txt", "utf-8")
let input = inputText.split("\n")

function processRule(rule) {
  var objectContainer = {}
  var outerBag = rule.match(/^\w*\s\w*/)[0]
  var innerBags = rule.match(/\d\s\w*\s\w*/g)

  if (innerBags) {
    objectContainer[outerBag] = {}
    innerBags.forEach(bag => {
      let colour = bag.match(/(?<=\d )\w*\s\w*/)[0]
      let frequency = bag.match(/\d/)[0]
      objectContainer[outerBag][colour] = frequency
    })
  } 

  return objectContainer
}

var ruleObjectsObject = {}

input.forEach(rule => {
  let bagObject = processRule(rule)
  let outerBag = Object.keys(bagObject)[0]
  ruleObjectsObject[outerBag] = bagObject[outerBag]
})

function findInnerBags(
    ruleObjects, innerBagCount = 0, currentBagception = ["shiny gold"]
) {
  var checkAgain = false
  var newBagception = []
  currentBagception.forEach(outerBag => {
    if(ruleObjects[outerBag]) {
      Object.keys(ruleObjects[outerBag]).forEach(innerBag => {
        var numberOf = ruleObjects[outerBag][innerBag]
        for(let i = 0; i < numberOf; i++) {
          newBagception.push(innerBag)
          innerBagCount++
          checkAgain = true
        }
      })
    }
  })
  if(checkAgain){
    findInnerBags(ruleObjectsObject, innerBagCount, newBagception)
  } else {
    console.log(innerBagCount)
  }
}

findInnerBags(ruleObjectsObject)
