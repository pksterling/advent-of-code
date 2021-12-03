const fs = require("fs")
let inputText = fs.readFileSync("./Day 4/4-input.txt", "utf-8")
let input = inputText.split(/\n\s*\n/)

var requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
validPassports = 0

input.forEach(function(passport) {
  validFields = 0
  requiredFields.forEach(field =>
    passport.includes(field) ? validFields++ : null
  )
  validFields == requiredFields.length ? validPassports++ : null
})

console.log(validPassports)