const fs = require("fs");
let inputText = fs.readFileSync("./11-input.txt", "utf-8");
let input = inputText.split("\r\n").map((row) => row.split("").map(Number));

let incrementAllOctopusEnergy = (input) =>
  input.map((row) => row.map((octopus) => ++octopus));

let incrementAdjacentOctopusEnergy = (flashX, flashY, input) => {
  flashX = parseInt(flashX);
  flashY = parseInt(flashY);

  for (let i = -1; i <= 1; i++) {
    y = flashY + i;

    if (y < 0 || y > input.length - 1) {
      continue;
    }

    for (let j = -1; j <= 1; j++) {
      x = flashX + j;

      if (x < 0 || x > input[0].length - 1) {
        continue;
      }

      input[y][x]++;
    }
  }

  return input;
};

let flashOctopuses = (input, flashedOctopuses = []) => {
  let flashed = false;

  for (row in input) {
    for (col in input[row]) {
      let xyString = row + "" + col;

      if (!flashedOctopuses.includes(xyString) && input[row][col] > 9) {
        input = incrementAdjacentOctopusEnergy(col, row, input);
        flashedOctopuses.push(xyString);
        flashed = true;
      }
    }
  }

  if (flashed) {
    return flashOctopuses(input, flashedOctopuses);
  } else {
    return input;
  }
};

let resetFlashedOctupses = (input) =>
  input.map((row) => row.map((e) => (e > 9 ? 0 : e)));

let countFlashedOctopuses = (input) =>
  input.reduce(
    (count, row) =>
      count +
      row.reduce((count, octopus) => (octopus == 0 ? ++count : count), 0),
    0
  );

let printOutput = (input) =>
  console.log(input.map((row) => row.join("")).join("\r\n") + "\r\n");

let noOfFlashes = 0;

for (let i = 0; i < 100; i++) {
  input = incrementAllOctopusEnergy(input);
  input = flashOctopuses(input);
  input = resetFlashedOctupses(input);
  noOfFlashes += countFlashedOctopuses(input);
}

console.log(noOfFlashes);
