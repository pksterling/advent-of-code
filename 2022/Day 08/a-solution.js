const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 08/input.txt", "utf-8")

let forest = inputText.split("\r\n").map(e => e.split(""))

let visibleTrees = forest.reduce((sum, row, rowIndex) =>
  sum + row.filter((tree, treeIndex) =>{
    if (treeIndex == 0 || treeIndex == row.length - 1 ||
        rowIndex == 0 || rowIndex == forest.length - 1) {
      return true
    }

    for (let i = treeIndex - 1; i >= 0; i--) {
      if (row[i] >= tree) {
        break
      }

      if (i == 0) {
        return true
      }
    }

    for (let i = treeIndex + 1; i < row.length; i++) {
      if (row[i] >= tree) {
        break
      }

      if (i == row.length - 1) {
        return true
      }
    }

    for (let i = rowIndex - 1; i >= 0; i--) {
      if (forest[i][treeIndex] >= tree) {
        break
      }

      if (i == 0) {
        return true
      }
    }

    for (let i = rowIndex + 1; i < forest.length; i++) {
      if (forest[i][treeIndex] >= tree) {
        break
      }

      if (i == forest.length - 1) {
        return true
      }
    }
  }).length
, 0)

console.log(visibleTrees)