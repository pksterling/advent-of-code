const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 06/6-input.txt", "utf-8")

let datastream = inputText.split("")
let marker = Array(4)

for (let i = 0; i < datastream.length; i++) {
  marker.push(datastream[i])
  marker.shift()

  if (i > 3 && marker.length == [...new Set(marker)].length) {
    console.log(i + 1)
    break
  }
}
