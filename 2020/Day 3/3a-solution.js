const fs = require("fs")
let inputText = fs.readFileSync("./Day 3/3-input.txt", "utf-8")
let input = inputText.split("\n")


var mapWidth = input[0].length - 1
var mapHeight = input.length
var nextLocation = ([y, x]) => ([y + 1, (x + 3) % mapWidth])

var treeCount = 0
function countTree(location) {
if (location == "#") {
    treeCount++
    console.log(treeCount)
  }
}

var coordinates = [0, 0]

while(coordinates[0] < mapHeight) {
  let y = coordinates[0]
  let x = coordinates[1]
  let location = input[y][x]
  countTree(location)
  coordinates = nextLocation(coordinates)
}
