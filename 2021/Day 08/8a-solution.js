const fs = require("fs");
let inputText = fs.readFileSync("./8-input.txt", "utf-8");
let outputValues = inputText
  .split("\r\n")
  .map((entry) => entry.split(" | ")[1].split(" "));

var correctOutputs = [
  "abcefg",
  "cf",
  "acdeg",
  "acdfg",
  "bcdf",
  "abdfg",
  "abdefg",
  "acf",
  "abcdefg",
  "abcdfg",
];

function count1478(outputValues) {
  return outputValues.reduce((count, outputValue) => {
    return (
      count +
      outputValue.reduce((count, digit) => {
        if (
          digit.length == correctOutputs[1].length ||
          digit.length == correctOutputs[4].length ||
          digit.length == correctOutputs[7].length ||
          digit.length == correctOutputs[8].length
        ) {
          count++;
        }

        return count;
      }, 0)
    );
  }, 0);
}

console.log(count1478(outputValues));
