const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 12/input.txt", "utf-8")

let alphabet = 
  Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97));
let heightMap = inputText.split("\r\n").map(e => e.split(""))
let start = heightMap.reduce((yx, row, i) => {
  let x = row.indexOf('E')
  return x == -1 ? yx : [i, x]
}, 0) 

let height = (yx) => {
  let letter = heightMap[yx[0]][yx[1]]

  if (letter == 'E') return 25
  if (letter == 'S') return 0
  return alphabet.indexOf(letter)
}

function pathFinder(currentQueue=[start], locations=[], steps=0) {
  let nextQueue = []

  let end = currentQueue.some(yx => {
    if (heightMap[yx[0]][yx[1]] == 'S' || heightMap[yx[0]][yx[1]] == 'a') {
      return true
    }
    if (locations.indexOf(yx.join(":")) != -1) return
    locations.push(yx.join(":"))

    let potentialRoutes = []

    if (yx[0] > 0) {
      potentialRoutes.push([yx[0] - 1, yx[1]])
    }

    if (yx[0] < heightMap.length - 1) {
      potentialRoutes.push([yx[0] + 1, yx[1]])
    }

    if (yx[1] > 0) {
      potentialRoutes.push([yx[0], yx[1] - 1])
    }

    if (yx[1] < heightMap[0].length - 1) {
      potentialRoutes.push([yx[0], yx[1] + 1])
      
    }

    nextQueue.push(...potentialRoutes.filter(e => height(e) >= height(yx) - 1))
  })

  if (end) return steps
  return pathFinder(nextQueue, locations, steps + 1)
}

console.log(pathFinder())