const fs = require("fs");
let inputText = fs.readFileSync("./6-input.txt", "utf-8");
let array = inputText.split(",").map(Number);

var numberGroups = Array(9).fill(0);

array.forEach((number) => {
  numberGroups[number]++;
});

for (let i = 0; i < 256; i++) {
  var newNumberGroups = [];

  for(let j = 0; j < 8; j++) {
    newNumberGroups[j] = numberGroups[j + 1]
  }

  newNumberGroups[8] = numberGroups[0];
  newNumberGroups[6] += numberGroups[0];

  numberGroups = newNumberGroups;
}

var numberOfNumbers = Object.values(numberGroups).reduce(
  (sum, number) => sum + number
);

console.log(numberOfNumbers);
