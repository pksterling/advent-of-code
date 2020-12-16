const { count } = require("console")
const fs = require("fs")
let inputText = fs.readFileSync("./Day 10/10-input.txt", "utf-8")
let input = inputText.split("\n").map(e => parseInt(e))
