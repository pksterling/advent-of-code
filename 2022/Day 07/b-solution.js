const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 07/input.txt", "utf-8")

class Directory {
  constructor(parentDir) {
    this.parentDir = parentDir
    this.directories = {}
    this.files = []
  }

  totalSize() {
    let filesSize = this.files.reduce((sum, num) => sum + num, 0)
    let childFilesSize = Object.values(this.directories)
      .reduce((sum, dir) => sum + directories[dir].totalSize(), 0)
    return filesSize + childFilesSize
  }
}

let directories = [new Directory(undefined)]
let terminalOutput = inputText.split("\n").map(e => e.split(" "))
let currentDir

terminalOutput.forEach(e => {
  if (e[0] == '$') {
    if (e[1] == 'cd') {
      if (e[2].match(/\//)) {
        currentDir = 0
      } else if (e[2].match(/\.\./)) {
        currentDir = directories[currentDir]["parentDir"]
      } else {
        currentDir = directories[currentDir]["directories"][e[2]]
      }
    }
  } else if (e[0] == 'dir') {
    directories.push(new Directory(currentDir))
    directories[currentDir]["directories"][e[1]] = directories.length - 1
  } else if (e[0].match(/\d*/)) {
    directories[currentDir]["files"].push(parseInt(e[0]))
  }
})


let requiredSpace = 30000000 - (70000000 - directories[0].totalSize())
let smallestValidDeletion = directories
  .map(e => e.totalSize())
  .filter(e => e >= requiredSpace)
  .sort()[0]

console.log(smallestValidDeletion)