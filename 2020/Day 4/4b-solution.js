const fs = require("fs")
let inputText = fs.readFileSync("./Day 4/4-input.txt", "utf-8")
let input = inputText.split(/\n\s*\n/)

var validations = [
  /(?<!\S)byr:(19[2-9][0-9]|200[0-2])(?!\S)/,
  /(?<!\S)iyr:(201[0-9]|2020)(?!\S)/,
  /(?<!\S)eyr:(202[0-9]|2030)(?!\S)/,
  /(?<!\S)hgt:(1([5-8][0-9]|9[0-3])cm|(59|6[0-9]|7[0-6])in)(?!\S)/,
  /(?<!\S)hcl:#[a-fA-F0-9]{6}(?!\S)/,
  /(?<!\S)ecl:(amb|blu|brn|gry|grn|hzl|oth)(?!\S)/, 
  /(?<!\S)pid:\d{9}(?!\S)/,
]

validPassports = 0

input.forEach(function(passport) {
  console.log(passport)
  validFields = 0
  validations.forEach(rules => {
    let regex = new RegExp(rules)
    if (passport.match(regex)) {
      validFields++
      console.log("bingo")
    } else {
      console.log("nope")
    }
  })
  validFields == validations.length ? validPassports++ : null
  console.log("")
})

console.log(validPassports)