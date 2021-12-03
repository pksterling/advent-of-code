const fs = require("fs")
let inputText = fs.readFileSync("./2-input.txt", "utf-8")
let input = inputText.split("\r\n").map(Number)

