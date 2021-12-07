const fs = require("fs");
let inputText = fs.readFileSync("./7-input.txt", "utf-8");
let input = inputText.split(",").map((e) => parseInt(e));

var median = input.sort((a, b) => a - b)[Math.round(input.length / 2)];

var fuelUsed = input.reduce((sum, number) => sum + Math.abs(median - number), 0)

console.log(fuelUsed)