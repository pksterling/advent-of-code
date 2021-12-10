const fs = require("fs");
let inputText = fs.readFileSync("./9-input.txt", "utf-8");
let area = inputText
  .split("\r\n")
  .map((row) => row.split("").map(Number));



console.log(riskFactor);
