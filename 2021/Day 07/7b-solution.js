const fs = require("fs");
let inputText = fs.readFileSync("./7-input.txt", "utf-8");
let input = inputText.split(",").map(Number);

var average = Math.floor(
  input.reduce((sum, number) => sum + number) / input.length
);

function triangularNumber(n) {
  if (n <= 1) {
    return n;
  }
  return n + triangularNumber(n - 1);
}

var fuelUsed = input.reduce(
  (sum, number) => sum + triangularNumber(Math.abs(average - number)),
  0
);

console.log(fuelUsed);
