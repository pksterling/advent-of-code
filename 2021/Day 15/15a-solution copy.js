const fs = require("fs");
let inputText = fs.readFileSync("./15-input.txt", "utf-8");
let cavern = inputText.split("\r\n").map((e) => e.split(""));

let findSafestPath = (
  path = [cavern[0].length - 1 + "," + (cavern.length - 1)],
  visited = []
) => {
  let coordinates = path[0];
  console.log(coordinates);
  let x = parseInt(coordinates.split(",")[0]);
  let y = parseInt(coordinates.split(",")[1]);

  visited.push(coordinates);

  if (x == 0 && y == 0) {
    return path.length;
  }

  paths = [];

  if (x > 0) {
    let nextCoordinates = x - 1 + "," + y;

    if (!visited.includes(nextCoordinates)) {
      paths.push(findSafestPath(nextCoordinates.concat(path), visited));
    }
  }

  if (x < cavern[0].length - 1) {
    let nextCoordinates = x + 1 + "," + y;

    if (!visited.includes(nextCoordinates)) {
      paths.push(findSafestPath(nextCoordinates.concat(path), visited));
    }
  }

  if (y > 0) {
    let nextCoordinates = x + "," + (y - 1);

    if (!visited.includes(nextCoordinates)) {
      paths.push(findSafestPath(nextCoordinates.concat(path), visited));
    }
  }

  if (y < cavern.length - 1) {
    let nextCoordinates = x + "," + (y + 1);

    if (!visited.includes(nextCoordinates)) {
      paths.push(findSafestPath(nextCoordinates.concat(path), visited));
    }
  }

  return paths.reduce((safest, path) => (path < safest ? path : safest));
};

console.log(findSafestPath());
