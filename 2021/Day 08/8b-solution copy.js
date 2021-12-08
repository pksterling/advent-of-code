const { sign } = require("crypto");
const fs = require("fs");
let inputText = fs.readFileSync("./8-input.txt", "utf-8");
let entries = inputText
  .split("\r\n")
  .map((entry) => entry.split(" | ").map((e) => e.split(" ")));

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
].map(e => e.split(""));

function decodePatterns(signalPatterns) {
  var foundOutputs = [];

  // Find 1478
  signalPatterns.forEach((pattern) => {
    if (pattern.length == correctOutputs[1].length) {
      foundOutputs[1] = stringSortArray(pattern);
    }

    // Find 4
    if (pattern.length == correctOutputs[4].length) {
      foundOutputs[4] = stringSortArray(pattern);
    }

    // Find 7
    if (pattern.length == correctOutputs[7].length) {
      foundOutputs[7] = stringSortArray(pattern);
    }

    // Find 8
    if (pattern.length == correctOutputs[8].length) {
      foundOutputs[8] = stringSortArray(pattern);
    }
  });

  signalPatterns.forEach((pattern) => {
    if (foundOutputs.includes(pattern)) {
      return;
    }

    // Find 9
    if (
      !foundOutputs[9] &&
      pattern.length == correctOutputs[9].length &&
      foundOutputs[4].every((letter) => pattern.includes(letter))
    ) {
      foundOutputs[9] = stringSortArray(pattern);
    }

    // Find 3
    if (
      !foundOutputs[3] &&
      pattern.length == correctOutputs[3].length &&
      foundOutputs[7].every((letter) => pattern.includes(letter))
    ) {
      foundOutputs[3] = stringSortArray(pattern);
    }

    // Find 0
    if (
      !foundOutputs[0] &&
      pattern.length == correctOutputs[0].length &&
      foundOutputs[7].every((letter) => pattern.includes(letter))
    ) {
      foundOutputs[0] = stringSortArray(pattern);
    }

    // Find 5
    if (
      !foundOutputs[5] &&
      pattern.length == correctOutputs[5].length &&
      foundOutputs[4].filter(letter => pattern.includes(letter)).length == 2
    ) {
      foundOutputs[5] = stringSortArray(pattern);
    }
  });

  signalPatterns.forEach((pattern) => {
    if (foundOutputs.includes(pattern)) {
      return;
    }

    // Find 6
    if (!foundOutputs[6] && pattern.length == correctOutputs[6].length) {
      foundOutputs[6] = stringSortArray(pattern);
    }

    // Find 2
    if (!foundOutputs[2] && pattern.length == correctOutputs[2].length) {
      foundOutputs[2] = stringSortArray(pattern);
    }
  });

  return foundOutputs;
}

function stringSortArray(string) {
  return string.split("").sort()
}

function decrpytOuput(outputValue, foundOutputs) {

  return outputValue.reduce(
    (decrypted, pattern) => {
      console.log(stringSortArray(pattern));
      console.log(foundOutputs);
      return decrypted + foundOutputs.indexOf(stringSortArray(pattern));
    }, "");
}
var outputs = [entries].map((entry) => decrpytOuput(entry[1], decodePatterns(entry[0])));

// console.log(outputs);
