const fs = require("fs");
let inputText = fs.readFileSync("./14-input.txt", "utf-8");
let input = inputText.split("\r\n\r\n");
let polymerTemplate = input[0].split("");
let pairInsertions = input[1].split("\r\n").map((e) => e.split(" -> "));

let originalPairs = polymerTemplate.reduce((obj, letter, i) => {
  if (i < polymerTemplate.length - 1) {
    let pair = letter + polymerTemplate[i + 1];

    obj[pair] = obj[pair] ? ++obj[pair] : 1;
  }

  return obj;
}, {});

let amendPairs = (pairInsertion, nextPairs, currentPairs) => {
  let oldPair = pairInsertion[0];
  let newPair1 = pairInsertion[0][0] + pairInsertion[1];
  let newPair2 = pairInsertion[1] + pairInsertion[0][1];

  nextPairs[newPair1] = nextPairs[newPair1]
    ? nextPairs[newPair1] + currentPairs[oldPair]
    : currentPairs[oldPair];

  nextPairs[newPair2] = nextPairs[newPair2]
    ? nextPairs[newPair2] + currentPairs[oldPair]
    : currentPairs[oldPair];

  nextPairs[oldPair] -= currentPairs[oldPair];

  return nextPairs;
};

let runStep = (currentPairs) =>
  pairInsertions.reduce(
    (nextPairs, pairInsertion) =>
      currentPairs[pairInsertion[0]]
        ? amendPairs(pairInsertion, nextPairs, currentPairs)
        : nextPairs,
    { ...currentPairs }
  );

let countLetters = (currentPairs) => {
  let letterCounts = Object.keys(currentPairs).reduce(
    (obj, pair) => (
      (obj[pair[1]] = obj[pair[1]]
        ? obj[pair[1]] + currentPairs[pair]
        : currentPairs[pair]),
      obj
    ),
    {}
  );

  letterCounts[polymerTemplate[0]] = letterCounts[polymerTemplate[0]]
    ? ++letterCounts[polymerTemplate[0]]
    : 1;

  return letterCounts;
};

let calculateResult = (currentPairs) => {
  let letterCounts = countLetters(currentPairs);

  let counts = Object.values(letterCounts).sort((a, b) => a - b);

  return counts[counts.length - 1] - counts[0];
};

let currentPairs = originalPairs;

for (let i = 0; i < 40; i++) {
  currentPairs = runStep(currentPairs);
}

console.log(calculateResult(currentPairs));
