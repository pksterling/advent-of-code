const fs = require("fs");
let inputText = fs.readFileSync("./6-input.txt", "utf-8");
let array = inputText.split(",").map(Number);

for (let i = 0; i < 256; i++) {
  let newArray = [];

  array.forEach((e) => {
    if (e == 0) {
      newArray.push(6);
      e = 9;
    }

    e--;
    newArray.push(e);
  });

  array = newArray;

  if (i == 255) {
    console.log(array.length);
  }
}

// console.log(input);
