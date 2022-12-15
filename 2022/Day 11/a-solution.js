const fs = require("fs")
let inputText = fs.readFileSync("2022/Day 11/input.txt", "utf-8")

let monkeys = inputText.split("\r\n\r\n").map(e => e.split("\r\n")).map(e => ({
  "startingItems": e[1].match(/\d{1,}/g).map(Number),
  "op": e[2].match(/[\+\*]|\w{1,}$/g),
  "test": e[3].match(/\d{1,}/)[0],
  "true": e[4].match(/\d{1,}/)[0],
  "false": e[5].match(/\d{1,}/)[0],
  "numOfInspects": 0
}))

for (let i = 0; i < 20; i++) {
  monkeys.forEach(e => {
    while (e.startingItems.length > 0) {
      let item = e.startingItems.shift()
      let opNum = e.op[1] == 'old' ? item : e.op[1]
      let newItem = Math.floor(eval(item + e.op[0] + opNum) / 3)
      let nextMonkey = newItem % e.test == 0 ? e.true : e.false

      e.numOfInspects++
      monkeys[nextMonkey].startingItems.push(newItem)
    }
  })
}

let mostActiveMonkeys = monkeys.map(e => e.numOfInspects).sort((a, b) => b - a)
let monkeyBusiness = mostActiveMonkeys[0] * mostActiveMonkeys[1]

console.log(monkeyBusiness)