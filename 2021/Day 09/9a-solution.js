const fs = require("fs");
let inputText = fs.readFileSync("./9-input.txt", "utf-8");
let area = inputText
  .split("\r\n")
  .map((row) => row.split("").map((e) => parseInt(e)));

let checkRow = (row, riskFactor) => {
  for (let col = 0; col < area[row].length; col++) {
    let point = area[row][col];

    if (row > 0) {
      if (point >= area[row - 1][col]) {
        continue;
      }
    }
    if (row < area.length - 1) {
      if (point >= area[row + 1][col]) {
        continue;
      }
    }
    if (col > 0) {
      if (point >= area[row][col - 1]) {
        continue;
      }
    }
    if (col < area[row].length - 1) {
      if (point >= area[row][col + 1]) {
        continue;
      }
    }

    riskFactor += 1 + point;
  }

  return riskFactor;
};

let riskFactor = 0;

for (let row = 0; row < area.length; row++) {
  riskFactor = checkRow(row, riskFactor);
}

console.log(riskFactor);
