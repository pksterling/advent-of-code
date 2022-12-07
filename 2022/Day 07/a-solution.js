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


let sumOfValidDirectories = directories
  .filter(e => e.totalSize() <= 100000)
  .reduce((sum, dir) => sum + dir.totalSize(), 0)

console.log(sumOfValidDirectories)