const fs = require("fs");
let inputText = fs.readFileSync("./10-input.txt", "utf-8");
let input = inputText.split("\r\n").map((row) => row.split(""));

let matchOpenClose = (open, close) => {
  return (
    (open == "(" && close == ")") ||
    (open == "[" && close == "]") ||
    (open == "{" && close == "}") ||
    (open == "<" && close == ">")
  );
};

let getClose = (open) => {
  if (open == "(") {
    return ")";
  }
  if (open == "[") {
    return "]";
  }
  if (open == "{") {
    return "}";
  }
  if (open == "<") {
    return ">";
  }
};

let processLine = (line) => {
  let openChars = [];

  for (i in line) {
    if (line[i] == "(" || line[i] == "[" || line[i] == "{" || line[i] == "<") {
      openChars.unshift(line[i]);
    } else {
      if (matchOpenClose(openChars[0], line[i])) {
        openChars.shift();
      } else {
        return false;
      }
    }
  }

  let completionString = [];

  openChars.forEach((char) => {
    completionString.push(getClose(char));
  });

  return completionString;
};

let calculateScore = (completionString) => {
  let score = 0;

  completionString.forEach((char) => {
    let points = char == ")" ? 1 : char == "]" ? 2 : char == "}" ? 3 : 4;

    score = score * 5 + points;
  });

  return score;
};

let completionStrings = input.map((line) => processLine(line)).filter((e) => e);

let scores = completionStrings
  .map((string) => calculateScore(string))
  .sort((a, b) => a - b);

console.log(scores);
console.log(scores[Math.floor(scores.length / 2)]);
