const fs = require("fs");
let inputText = fs.readFileSync("./15-input.txt", "utf-8");
let cavern = inputText.split("\r\n").map((e) => e.split("").map(Number));
cavern[0][0] = 0;

let visited = {};
let activeQueue = [[0, 0]];

let addToQueue = (xY, pendingQueue, visited) => {
  if (Object.keys(visited).includes(xY.join())) {
    pendingQueue.push(xY)
  }
}

while (activeQueue.length > 0) {
  let pendingQueue = [];
  let xY = activeQueue[0];
  let riskFactor = cavern[xY[1]][xY[0]];


}

console.log(cavern);
