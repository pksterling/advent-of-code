const fs = require("fs");
const { start } = require("repl");
let inputText = fs.readFileSync("2022/Day 11/input.txt", "utf-8")

let monkeys = inputText.split("\r\n\r\n").map(e => e.split("\r\n")).map(e => ({
  "startingItems": e[1].match(/\d{1,}/g),
  "op": e[2].match(/[\+\*]|\w{1,}$/g),
  "test": e[3].match(/\d{1,}/)[0],
  "true": e[4].match(/\d{1,}/)[0],
  "false": e[5].match(/\d{1,}/)[0],
  "numOfInspects": 0
  
}))
let reset = monkeys
  .map(e => Number(e.test))
  .reduce((prod, num) => prod * num)

for (let i = 0; i < 10000; i++) {
  monkeys.forEach((e) => {
    while (e.startingItems.length > 0) {
      let item = Number(e.startingItems.shift()) % reset
      let opNum = e.op[1] == 'old' ? item : Number(e.op[1])
      
      if (e.op[0] == '+') {
        newItem = item + opNum
      } else if (e.op[0] == '*') {
        newItem = item * opNum
      }
      let nextMonkey = newItem % e.test == 0 ? e.true : e.false

      e.numOfInspects++
      monkeys[nextMonkey].startingItems.push(newItem)
    }
  })
}

let mostActiveMonkeys = monkeys.map(e => e.numOfInspects).sort((a, b) => b - a)
let monkeyBusiness = mostActiveMonkeys[0] * mostActiveMonkeys[1]

console.log(monkeyBusiness)

// 32400179910