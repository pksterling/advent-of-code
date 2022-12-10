const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 08/input.txt", "utf-8")

let forest = inputText.split("\r\n").map(e => e.split(""))

let highestScenicScore = forest.reduce((best, row, rowIndex) => {
  let rowBest = row.reduce((currentBest, tree, treeIndex) => {
    if (treeIndex == 0 || treeIndex == row.length - 1 ||
        rowIndex == 0 || rowIndex == forest.length - 1) {
      return currentBest
    }

    let left = 0
    for (let i = treeIndex - 1; i >= 0; i--) {
      left++

      if (row[i] >= tree) {
        break
      }
    }

    let right = 0
    for (let i = treeIndex + 1; i < row.length; i++) {
      right ++
  
      if (row[i] >= tree) {
        break
      }
    }

    let top = 0
    for (let i = rowIndex - 1; i >= 0; i--) {
      top++

      if (forest[i][treeIndex] >= tree) {
        break
      }
    }

    let bottom = 0
    for (let i = rowIndex + 1; i < forest.length; i++) {
      bottom++

      if (forest[i][treeIndex] >= tree) {
        break
      }
    }

    let scenicScore = left * right * top * bottom
    return scenicScore > currentBest ? scenicScore : currentBest
  }, 0)
  
  return rowBest > best ? rowBest : best
}, 0)

console.log(highestScenicScore)