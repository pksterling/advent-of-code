const fs = require("fs");
let inputText = fs.readFileSync("./6-input.txt", "utf-8");
let array = inputText.split(",").map((e) => parseInt(e));

var numberGroups = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 };

array.forEach((number) => {
  numberGroups[`${number}`]++;
});

console.log(numberGroups);

for (let i = 0; i < 256; i++) {
  var newNumberGroups = {};

  newNumberGroups[8] = numberGroups[0];
  newNumberGroups[7] = numberGroups[8];
  newNumberGroups[6] = numberGroups[7] + numberGroups[0];
  newNumberGroups[5] = numberGroups[6];
  newNumberGroups[4] = numberGroups[5];
  newNumberGroups[3] = numberGroups[4];
  newNumberGroups[2] = numberGroups[3];
  newNumberGroups[1] = numberGroups[2];
  newNumberGroups[0] = numberGroups[1];

  numberGroups = newNumberGroups;
  console.log(numberGroups);
}

var numberOfNumbers = Object.values(numberGroups).reduce(
  (sum, number) => sum + number
);

console.log(numberOfNumbers);
