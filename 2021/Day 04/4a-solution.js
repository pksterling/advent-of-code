const fs = require("fs");
let inputText = fs.readFileSync("./4-input.txt", "utf-8");
let input = inputText.split("\r\n\r\n");
let numbers = input
  .shift()
  .split(",")
  .map((string) => parseInt(string));
let boards = input.map((board) => {
  return board.split("\r\n").map((row) => {
    return row.match(/\d\d|\s\d(?!\d)/g).map(Number);
  });
});

function stampMatchedNumber(number, board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == number) {
        board[i][j] = "XX";
      }
    }
  }

  return board;
}

function hasBingo(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "XX") {
        if (j == board[0].length - 1) {
          return true;
        }
      } else {
        break;
      }
    }
  }
}

function calculateBoardSum(board) {
  return board.reduce((boardScore, row) => {
    return (
      boardScore +
      row.reduce((rowScore, number) => {
        if (number != "XX") {
          rowScore += number;
        }

        return rowScore;
      }, 0)
    );
  }, 0);
}

for (let i = 0; i < numbers.length; i++) {
  let result = false;

  for (let j = 0; j < boards.length; j++) {
    boards[j] = stampMatchedNumber(numbers[i], boards[j]);

    if (hasBingo(boards[j])) {
      result = calculateBoardSum(boards[j]) * numbers[i];
      break;
    }
  }

  if (result) {
    console.log(result)
    break;
  }
}
