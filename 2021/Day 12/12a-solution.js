const fs = require("fs");
let inputText = fs.readFileSync("./12-input.txt", "utf-8");
const connections = inputText.split("\r\n").map((e) => e.split("-"));
const caves = [...new Set(connections.flat())];

let areConnected = (a, b) => {
  for (let i = 0; i < connections.length; i++) {
    if (connections[i].includes(a) && connections[i].includes(b)) {
      return true;
    }
  }
};

let findPaths = (journey = ["start"], paths = 0) => {
  let lastVisited = journey[journey.length - 1];

  if (lastVisited == "end") {
    return 1;
  }

  paths = caves.reduce((paths, cave) => {
    if (
      cave != lastVisited &&
      areConnected(lastVisited, cave) &&
      (!journey.includes(cave) ||
        cave == cave.toUpperCase())
    ) {
      paths += findPaths(journey.concat(cave), paths);
    }

    return paths;
  }, 0);

  return paths;
}

console.log(findPaths());