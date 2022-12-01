const fs = require("fs");
let inputText = fs.readFileSync("./15-input.txt", "utf-8");
let cavern = inputText.split("\r\n").map((e) => e.split(""));

let visited = {};
let destination = cavern[0].length - 1 + "," + cavern.length - 1;

let riskFactor = (xY) => parseInt(cavern[xY.split(",")[1]][xY.split(",")[0]]);

let findSafestPath = (currentXY = "0,0", totalRisk = 0) => {
  console.log("CurrentXY: " + currentXY);
  
  if (currentXY != "0,0") {
    totalRisk += riskFactor(currentXY);
  }
  
  if (visited[currentXY] && visited[currentXY] >= totalRisk) {
    return;
  }
  
  visited[currentXY] = totalRisk;
  console.log("TotalRisk: " + totalRisk);

  if (currentXY == destination) {
    return totalRisk;
  }

  let results = [];
  let nextXY;
  let x = parseInt(currentXY.split(",")[0]);
  let y = parseInt(currentXY.split(",")[1]);

  if (x > 0) {
    nextXY = x - 1 + "," + y;
    results.push(findSafestPath(nextXY), totalRisk);
  }

  if (x < cavern[0].length - 1) {
    nextXY = x + 1 + "," + y;
    results.push(findSafestPath(nextXY), totalRisk);
  }

  if (y > 0) {
    nextXY = x + "," + (y - 1);
    results.push(findSafestPath(nextXY), totalRisk);
  }

  if (y < cavern.length - 1) {
    nextXY = x + "," + (y + 1);
    results.push(findSafestPath(nextXY), totalRisk);
  }

  return results.filter((e) => e != undefined).sort((a, b) => b - a)[0];
};

console.log(findSafestPath());
