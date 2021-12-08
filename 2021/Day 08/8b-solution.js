const { sign } = require("crypto");
const fs = require("fs");
let inputText = fs.readFileSync("./8-input.txt", "utf-8");
let entries = inputText
  .split("\r\n")
  .map((entry) =>
    entry.split(" | ").map((e) => e.split(" ").map((e) => e.split("").sort()))
  );


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
].map((e) => e.split(""));

// 1, 4, 7, 8
// 0[2,3,3,6], 6[1!, 3, 2, 6], 9[2,4!,3,6]
// 2[1, 2!, 2, 5], 3[2!, 3, 3, 5], 5[1, 3, 2, 5]

function noOfMatches(pattern, check) {
  return pattern.filter((e) => check.includes(e)).length;
}

function find1478(signalPatterns) {
  let decryptedPatterns = [];

  signalPatterns.forEach((pattern) => {
    if (pattern.length == correctOutputs[1].length) {
      decryptedPatterns[1] = pattern;
    }
    if (pattern.length == correctOutputs[4].length) {
      decryptedPatterns[4] = pattern;
    }
    if (pattern.length == correctOutputs[7].length) {
      decryptedPatterns[7] = pattern;
    }
    if (pattern.length == correctOutputs[8].length) {
      decryptedPatterns[8] = pattern;
    }
  });

  return decryptedPatterns;
}


function find069(signalPatterns, decryptedPatterns) {
  let array069 = signalPatterns.filter((e) => e.length == 6);

  for(let i = 0; i < array069.length; i++) {
    
    if (noOfMatches(array069[i], decryptedPatterns[1]) == 1) {
      decryptedPatterns[6] = array069[i];
      array069.splice(i, 1);
      i--
    } else if (noOfMatches(array069[i], decryptedPatterns[4]) == 4) {
      decryptedPatterns[9] = array069[i];
      array069.splice(i, 1);
      i--
    }
    if (array069.length == 1) {
      decryptedPatterns[0] = array069[0];
      break
    }
  }
  

  return decryptedPatterns;
}

function find235(signalPatterns, decryptedPatterns) {
  let array235 = signalPatterns.filter((e) => e.length == 5);

  
  for(let i = 0; i < array235.length; i++) {
    
    if (noOfMatches(array235[i], decryptedPatterns[4]) == 2) {
      decryptedPatterns[2] = array235[i];
      array235.splice(i, 1);
      i--
    } else if (noOfMatches(array235[i], decryptedPatterns[1]) == 2) {
      decryptedPatterns[3] = array235[i];
      array235.splice(i, 1);
      i--
    }
    if (array235.length == 1) {
      decryptedPatterns[5] = array235[0];
      break
    }
  }
  return decryptedPatterns;
}

function calculateDigit(entry) {
  var decryptedPatterns = find1478(entry[0]);
  decryptedPatterns = find069(entry[0], decryptedPatterns);
  decryptedPatterns = find235(entry[0], decryptedPatterns);

  var output = entry[1].map(e => {
    for(let i = 0; i < decryptedPatterns.length; i++) {
      if (decryptedPatterns[i].join("") == e.join("")) {
        return i
      }
    }
  }).join("")
  return parseInt(output);
}

console.log(entries.reduce((sum, e) => sum + calculateDigit(e), 0))