const fs = require("fs");
let inputText = fs.readFileSync("./14-input.txt", "utf-8");
let input = inputText.split("\r\n\r\n");
let polymerTemplate = input[0].split("");
let pairInsertions = input[1].split("\r\n").map((e) => e.split(" -> "));

let runStep = (currentPolymer) => {
  return currentPolymer.reduce((result, letter, i) => {
    if (i >= currentPolymer.length - 1) {
      return result;
    }

    let pair = letter + currentPolymer[i + 1];

    for (let j = 0; j < pairInsertions.length; j++) {
      if (pair == pairInsertions[j][0]) {
        return i == 0
          ? result.concat(pair[0], pairInsertions[j][1], pair[1])
          : result.concat(pairInsertions[j][1], pair[1]);
      }
    }
  }, []);
};

let calculateResult = (polymer) => {
  let letterCounts = polymer.reduce(
    (obj, letter) => ((obj[letter] = obj[letter] ? ++obj[letter] : 1), obj),
    {}
  );

  let counts = Object.values(letterCounts).sort((a, b) => a - b);

  return counts[counts.length - 1] - counts[0];
};

let currentPolymer = polymerTemplate;

for (let i = 0; i < 10; i++) {
  currentPolymer = runStep(currentPolymer);
}

console.log(calculateResult(currentPolymer));
