const fs = require("fs");
let inputText = fs.readFileSync("./9-input.txt", "utf-8");
let area = inputText
  .split("\r\n")
  .map((row) => row.split("").map((e) => parseInt(e)));

let uniqueArray = (value, index, self) => self.indexOf(value) === index;

let addRowLowpoints = (row, lowpoints) => {
  for (let col = 0; col < area[row].length; col++) {
    let point = area[row][col];

    if (row > 0 && point >= area[row - 1][col]) {
      continue;
    }
    if (row < area.length - 1 && point >= area[row + 1][col]) {
      continue;
    }
    if (col > 0 && point >= area[row][col - 1]) {
      continue;
    }
    if (col < area[row].length - 1 && point >= area[row][col + 1]) {
      continue;
    }

    lowpoints.push(row + "-" + col);
  }

  return lowpoints;
};

let calculateBasin = (checkQueue, basin = []) => {
  if (!checkQueue[0] && basin[0]) {
    return basin.length;
  }

  let row = parseInt(checkQueue[0].split("-")[0]);
  let col = parseInt(checkQueue[0].split("-")[1]);
  let point = area[row][col];

  if (row > 0 && point < area[row - 1][col] && area[row - 1][col] < 9) {
    checkQueue.push(`${row - 1}-${col}`);
  }
  if (
    row < area.length - 1 &&
    point < area[row + 1][col] &&
    area[row + 1][col] < 9
  ) {
    checkQueue.push(`${row + 1}-${col}`);
  }
  if (col > 0 && point < area[row][col - 1] && area[row][col - 1] < 9) {
    checkQueue.push(`${row}-${col - 1}`);
  }
  if (
    col < area[row].length - 1 &&
    point < area[row][col + 1] &&
    area[row][col + 1] < 9
  ) {
    checkQueue.push(`${row}-${col + 1}`);
  }

  basin.push(checkQueue.shift());
  checkQueue = checkQueue.filter(uniqueArray);
  basin = basin.filter(uniqueArray);

  return calculateBasin(checkQueue, basin);
};

let lowpoints = [];

for (let row = 0; row < area.length; row++) {
  lowpoints = addRowLowpoints(row, lowpoints);
}

var basins = lowpoints.map((e) => calculateBasin([e])).sort((a, b) => b - a);

console.log(basins[0] * basins[1] * basins[2]);
