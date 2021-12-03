const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 11/11-input.txt", "utf-8")
let input = inputText.split("\n")
input = input.map(string => string.split(""))

function adjustSeatState(seatPlan, newSeatPlan = [], y = 0, x = 0, seatsChanged = false) {
  if (newSeatPlan.length == 0) {
    newSeatPlan = JSON.parse(JSON.stringify(seatPlan))
  }
  var seat = newSeatPlan[y][x]
  console.log("Start function on seat [" + [y, x] + "] which is '" + seat + "'")

  if (seat == 'L') {
    var changeSeat = true
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        y + i >= 0 && y + i < seatPlan.length ? console.log(seatPlan[y + i][x + j]) : null
        if (y + i >= 0 && y + i < seatPlan.length && seatPlan[y + i][x + j] == '#') {
          changeSeat = false
        }
      }
    }
    if (changeSeat) {
      seat = '#'
      console.log("Seats Changed from 'L' to '#'")
    }
  } else if (seat == '#') {
    var adjacentPeople = 0
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (y + i >= 0 && y + i < seatPlan.length && seatPlan[y + i][x + j] == '#') {
          adjacentPeople++
        }
      }
    }
    if (adjacentPeople >= 5) {
      seat = 'L'
      console.log("Seats Changed from '# to 'L'")
    }
  }

  seatPlan[y].splice(x, 1, seat)
  
  console.log(JSON.stringify(seatPlan))
  console.log("-")
  console.log(JSON.stringify(newSeatPlan))
  if (x < seatPlan[y].length - 1) {
    console.log("x changed from '" + x + "' to '" + (x + 1))
    x++
  } else if (y < seatPlan.length - 1) {
    console.log("y changed from '" + y + "' to '" + (y + 1))
    x = 0
    y++
  } else {
    console.log(JSON.stringify(seatPlan))
    return
  }
  console.log("--")
  adjustSeatState(seatPlan, newSeatPlan, y, x, seatsChanged)
}

adjustSeatState(input)