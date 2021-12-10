const fs = require("fs");
let inputText = fs.readFileSync("./5-input.txt", "utf-8");
let input = inputText
  .split("\r\n")
  .map((endpoints) =>
    endpoints
      .split(" -> ")
      .map((coordinates) => coordinates.split(",").map(Number))
  );

function createField(vectors) {
  let x = 0;
  let y = 0;

  vectors.forEach((vector) => {
    x = vector[0][0] > x ? vector[0][0] : x;
    x = vector[1][0] > x ? vector[1][0] : x;
    y = vector[0][1] > y ? vector[0][1] : y;
    y = vector[1][1] > y ? vector[1][1] : y;
  });

  var field = [];
  for (let i = 0; i - 1 < y; i++) {
    field[i] = [];
    for (let j = 0; j - 1 < x; j++) {
      field[i][j] = 0;
    }
  }

  return field;
}

function markVent(vector, field) {
  var x1 = vector[0][0];
  var y1 = vector[0][1];
  var x2 = vector[1][0];
  var y2 = vector[1][1];

  if (x1 == x2) {
    let start = [y1, y2].sort((a, b) => a - b)[0];
    let end = [y1, y2].sort((a, b) => a - b)[1];

    for (let i = start; i - 1 < end; i++) {
      field[i][x1]++;
    }
  } else if (y1 == y2) {
    let start = [x1, x2].sort((a, b) => a - b)[0];
    let end = [x1, x2].sort((a, b) => a - b)[1];

    for (let i = start; i - 1 < end; i++) {
      field[y1][i]++;
    }
  }

  return field;
}

function calculateDangerPoints(field) {
  return field.reduce((count, row) => {
    return count + row.filter((e) => e >= 2).length;
  }, 0);
}

var field = createField(input);

input.forEach((vector) => {
  field = markVent(vector, field);
});

console.log(calculateDangerPoints(field));
