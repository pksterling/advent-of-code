const fs = require("fs")
let inputText = fs.readFileSync("./Day 5/5-input.txt", "utf-8")
let input = inputText.split("\n")

function splitRowColumn(seatCode) {
  var rowCode = seatCode.match(/[FB]{7}/)[0]
  var columnCode = seatCode.match(/[LR]{3}/)[0]

  return {
    rowCode: rowCode,
    columnCode: columnCode
  }
}

function calculateRowNum(rowCode) {
  var rowNumRange = {
    min: 0,
    max: 127
  }
  rowCode = [...rowCode]

  rowCode.forEach(character => {
    if (character == "F") {
      rowNumRange.max
        = rowNumRange.max - (rowNumRange.max - rowNumRange.min + 1) / 2
    } else if (character == "B") {
      rowNumRange.min
        = rowNumRange.min + (rowNumRange.max - rowNumRange.min + 1) / 2
    }
  })

  return rowNumRange.min
}

function calculateColumnNum(columnCode) {
  var columnNumRange = {
    min: 0,
    max: 7
  }
  columnCode = [...columnCode]

  columnCode.forEach(character => {
    if (character == "L") {
      columnNumRange.max
        = columnNumRange.max - (columnNumRange.max - columnNumRange.min + 1) / 2
    } else if (character == "R") {
      columnNumRange.min
        = columnNumRange.min + (columnNumRange.max - columnNumRange.min + 1) / 2
    }
  })

  return columnNumRange.min
}

function calculateSeatID(rowNum, columnNum) {
  return rowNum * 8 + columnNum
}

function sortSeatIDArray(seatIDArray) {
  seatIDArray.sort((a, b) => b - a)
  return seatIDArray
}

var seatIDArray = []
input.forEach(seatCode => {
  var splitCodes = splitRowColumn(seatCode)

  var rowNum = calculateRowNum(splitCodes.rowCode)
  var columnNum = calculateColumnNum(splitCodes.columnCode)

  seatIDArray.push(calculateSeatID(rowNum, columnNum))
})

sortSeatIDArray(seatIDArray)

for(let i = 0; i < seatIDArray[0]; i++) {
  if (
    ! seatIDArray.includes(i)
    && seatIDArray.includes(i - 1)
    && seatIDArray.includes(i + 1)
    ) {
    console.log(i)
  }
}
