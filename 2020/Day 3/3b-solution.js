const fs = require("fs")
let inputText = fs.readFileSync("./Day 3/3-input.txt", "utf-8")
let input = inputText.split("\n")

var mapWidth = input[0].length - 1
var mapHeight = input.length
var nextLocation = ([y, x], [xSpeed, ySpeed]) => ([y + ySpeed, (x + xSpeed) % mapWidth])

function calculateTotalTrees(velocity) {
  var coordinates = [0, 0]
  var treeCount = 0

  while(coordinates[0] < mapHeight) {
    let y = coordinates[0]
    let x = coordinates[1]
    let location = input[y][x]
    treeCount += location == "#" ? 1 : 0
    coordinates = nextLocation(coordinates, velocity)
  }

  return treeCount
}

var velocities = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]

console.log(velocities.reduce((product, velocity) => product * calculateTotalTrees(velocity), 1))