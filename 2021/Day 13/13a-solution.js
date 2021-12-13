const fs = require("fs");
let inputText = fs.readFileSync("./13-input.txt", "utf-8");
const input = inputText.split("\r\n\r\n").map((e) => e.split("\r\n"));
let coordinates = input[0].map((e) => e.split(",").map(Number));
let folds = input[1].map((e) => e.match(/[y/x]=\d*/)[0].split("="));

let printPage = (page) => {
  console.log(page.map((row) => row.join("")).join("\r\n") + "\r\n");
};

let createPage = (coordinates) => {
  let x = 0;
  let y = 0;

  coordinates.forEach((coordinate) => {
    x = coordinate[0] > x ? coordinate[0] : x;
    y = coordinate[1] > y ? coordinate[1] : y;
  });

  let page = [];

  for (let i = 0; i <= y; i++) {
    page[i] = [];

    for (let j = 0; j <= x; j++) {
      page[i][j] = ".";
    }
  }

  return page;
};

let addDot = (page, coordinate) => {
  let x = coordinate[0];
  let y = coordinate[1];

  page[y][x] = "#";

  return page;
};

let foldPage = (page, fold) => {
  let axis = fold[1];

  if (fold[0] == "x") {
    return page.reduce((newPage, row) => {
      row.splice(axis, 1);

      for (let i = 1; row[axis]; i++) {
        if (row[axis] == "#") {
          row[axis - i] = "#";
        }

        row.splice(axis, 1);
      }

      return newPage.concat([row]);
    }, []);
  } else {
    page.splice(axis, 1);

    for (let i = 1; page[axis]; i++) {
      page[axis - i] = page[axis - i].reduce((row, point, j) => {
        row.push(page[axis][j] == "#" ? "#" : point);

        return row;
      }, []);

      page.splice(axis, 1);
    }

    return page
  }
};

let page = createPage(coordinates);

page = coordinates.reduce((page, coordinate) => addDot(page, coordinate), page);
page = foldPage(page, folds[0])
dots = page.flat().filter(point => point == "#").length

console.log(dots);
