const fs = require("fs");
let inputText = fs.readFileSync("./15-input.txt", "utf-8");
let cavern = inputText.split("\r\n").map((e) => e.split(""));

let findSafestPath = () => {
  let visited = [];

  for (let i = 0; i < cavern.length - 1; i++) {
    visited.push([]);
    for (let j = 0; j < cavern.length - 1; j++) {
      visited[i][j] = false;
    }
  }

  let queue = [cavern[0].length - 1 + "," + (cavern.length - 1)];

  while (queue.length > 0) {
    let nextQueue = [];

    queue.forEach((coordinate) => {
      let x = parseInt(currentXY.split(",")[0]);
      let y = parseInt(currentXY.split(",")[1]);
      let nextCoordinate;

      if (x > 0) {
        nextCoordinate = x - 1 + "," + y;
        nextQueue.push(nextCoordinate);
      }

      if (x < cavern[0].length - 1) {
        nextCoordinate = x + 1 + "," + y;
        nextQueue.push(nextCoordinate);
      }

      if (y > 0) {
        nextCoordinate = x + "," + (y - 1);
        nextQueue.push(nextCoordinate);
      }

      if (y < cavern.length - 1) {
        nextCoordinate = x + "," + (y + 1);
        nextQueue.push(nextCoordinate);
      }

      
    });
  }
};

console.log(findSafestPath());
