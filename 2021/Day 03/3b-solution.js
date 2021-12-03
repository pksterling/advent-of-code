const fs = require("fs");
let inputText = fs.readFileSync("./3-input.txt", "utf-8");
let input = inputText.split("\r\n");

function findModeOfIndex(array, checkIndex) {
  var indexScore = array.reduce((count, binaryNumber) => {
    return binaryNumber[checkIndex] == 0 ? count - 1 : count + 1;
  }, 0);

  return indexScore < 0 ? "0" : "1";
}

function findOxygenGeneratorRating(array, index = 0) {
  if (array.length == 1) {
    return array[0];
  }

  var mode = findModeOfIndex(array, index);

  array = array.filter((binaryNumber) => {
    return binaryNumber[index] == mode;
  });

  return findOxygenGeneratorRating(array, index + 1);
}

function findco2Rating(array, index = 0) {
  if (array.length === 1) {
    return array[0];
  }

  var antiMode = findModeOfIndex(array, index) == "0" ? "1" : "0";

  array = array.filter((binaryNumber) => {
    return binaryNumber[index] == antiMode;
  });

  return findco2Rating(array, index + 1);
}

function calculateLifeSupportRating(input) {
  var oxygenRatingBinary = findOxygenGeneratorRating(input);
  var co2RatingBinary = findco2Rating(input);
  var lifeSupportRating =
    parseInt(oxygenRatingBinary, 2) * parseInt(co2RatingBinary, 2);
  return lifeSupportRating;
}

console.log(calculateLifeSupportRating(input));
