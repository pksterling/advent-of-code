const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 10/10-input.txt", "utf-8")
let input = inputText.split("\n")
.map(e => parseInt(e))
.sort( (a, b) => a - b)

var oneJolts = 0
var threeJolts = 0

input.unshift(0)
for (let i = 0; i < input.length - 1; i++) {
  var diff = input[i + 1] - input[i]
  diff == 3 ? threeJolts++ : diff == 1 ? oneJolts++ : null
}
threeJolts++

var result = oneJolts * threeJolts
console.log(result)