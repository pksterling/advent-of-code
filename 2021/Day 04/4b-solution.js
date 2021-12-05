const fs = require("fs");
let inputText = fs.readFileSync("./4-input.txt", "utf-8");
let input = inputText.split("\r\n\r\n");
let numbers = input
  .shift()
  .split(",")
  .map((string) => parseInt(string));
let boards = input.map((board) => {
  return board.split("\r\n").map((row) => {
    return row.match(/\d\d|\s\d(?!\d)/g).map((e) => parseInt(e));
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

  for (let k = 0; k < board[0].length; k++) {
    for (let l = 0; l < board.length; l++) {
      if (board[l][k] == "XX") {
        if (l == board.length - 1) {
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

function findLastBoard(boards, numbers) {
  var stampedBoards = boards;

  for (let i = 0; i < stampedBoards.length; i++) {
    stampedBoards[i] = stampMatchedNumber(numbers[0], stampedBoards[i]);

    if (hasBingo(stampedBoards[i])) {
      if (stampedBoards.length == 1) {
        return calculateBoardSum(stampedBoards[0]) * numbers[0];
      }

      stampedBoards.splice(i, 1);
      i--;
    }
  }

  numbers.shift();
  return findLastBoard(stampedBoards, numbers);
}

console.log(findLastBoard(boards, numbers));
