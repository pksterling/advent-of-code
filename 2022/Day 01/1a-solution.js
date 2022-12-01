const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 01/1-input.txt", "utf-8")

let inventories = inputText.split(/\r\n\r\n/)
let inventoriesInt = inventories.map(e => e.split(/\r\n/).map(e => parseInt(e)))
let calories = inventoriesInt.map(e => e.reduce((sum, num) => sum + num))
let highestCalories = Math.max(...calories)

console.log(highestCalories)