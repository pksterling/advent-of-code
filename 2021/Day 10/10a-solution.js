const fs = require("fs");
let inputText = fs.readFileSync("./10-input.txt", "utf-8");
let input = inputText.split("\r\n").map((row) => row.split(""));
let openingChars = ["(", "[", "{", "<"];

let matchOpenClose = (open, close) =>
  (open == "(" && close == ")") ||
  (open == "[" && close == "]") ||
  (open == "{" && close == "}") ||
  (open == "<" && close == ">");

let checkLine = (line, illegalChars) => {
  let openChars = [];

  for (i in line) {
    if (openingChars.includes(line[i])) {
      openChars.unshift(line[i]);
    } else {
      if (matchOpenClose(openChars[0], line[i])) {
        openChars.shift();
      } else {
        illegalChars[line[i]]++;
        break;
      }
    }
  }

  return illegalChars;
};

let calculateScore = (illegalChars) =>
  3 * illegalChars[")"] +
  57 * illegalChars["]"] +
  1197 * illegalChars["}"] +
  25137 * illegalChars[">"];

let illegalChars = { ")": 0, "]": 0, "}": 0, ">": 0 };

input.forEach((line) => {
  illegalChars = checkLine(line, illegalChars);
});

console.log(calculateScore(illegalChars));
