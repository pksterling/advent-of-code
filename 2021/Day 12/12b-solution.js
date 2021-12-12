const fs = require("fs");
let inputText = fs.readFileSync("./12-input.txt", "utf-8");
let connections = inputText.split("\r\n").map((e) => e.split("-"));
let caves = [...new Set(connections.flat())];
caves = caves.reduce(
  (obj, cave1) => (
    (obj[cave1] = caves.filter((cave2) =>
      connections.some(
        (connection) =>
          cave1 != cave2 &&
          connection.includes(cave1) &&
          connection.includes(cave2)
      )
    )),
    obj
  ),
  {}
);

let hasSpareVisit = (visited) => {
  let smallCaveVisits = visited.filter(
    (e) => e != "start" && e == e.toLowerCase()
  );

  return smallCaveVisits.length == [...new Set(smallCaveVisits)].length;
};

let findPaths = (path = ["start"]) => {
  let lastVisited = path[path.length - 1];

  return lastVisited == "end"
    ? 1
    : caves[lastVisited].reduce((paths, next) => {
        if (
          next != "start" &&
          (next == next.toUpperCase() ||
            !path.includes(next) ||
            hasSpareVisit(path))
        ) {
          paths += findPaths(path.concat(next));
        }

        return paths;
      }, 0);
};

console.log(findPaths());
