const input = "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,2,9,19,23,1,9,23,27,2,27,9,31,1,31,5,35,2,35,9,39,1,39,10,43,2,43,13,47,1,47,6,51,2,51,10,55,1,9,55,59,2,6,59,63,1,63,6,67,1,67,10,71,1,71,10,75,2,9,75,79,1,5,79,83,2,9,83,87,1,87,9,91,2,91,13,95,1,95,9,99,1,99,6,103,2,103,6,107,1,107,5,111,1,13,111,115,2,115,6,119,1,119,5,123,1,2,123,127,1,6,127,0,99,2,14,0,0";
const array = input.split(',').map(Number);
const target = 19690720;

var bingo = false;
var verb;
var noun;
var output;

function opcode(n, v) {
  arrayLocal = [...array];
  arrayLocal[1] = n;
  arrayLocal[2] = v;
  for (x = 0; arrayLocal[x] != 99; x += 4) {
    if (arrayLocal[x] == 1) {
      arrayLocal[arrayLocal[x+3]] = arrayLocal[arrayLocal[x+1]] + arrayLocal[arrayLocal[x+2]];
    } else if (arrayLocal[x] == 2) {
      arrayLocal[arrayLocal[x+3]] = arrayLocal[arrayLocal[x+1]] * arrayLocal[arrayLocal[x+2]];
    }  else if (arrayLocal[x] == 99) {
      break;
    }
  }
  if (arrayLocal[0] == target) {
    bingo = true;
    output = 100 * noun + verb;
  }
}

function verbCheck(noun) {
  for (verb = 0; verb-1<= noun; verb++) {
    opcode(noun, verb);
    if (bingo == true) {
      break;
    }
  }
}

function nounCheck(max) {
  for (noun = 0; noun < max; noun++) {
    verbCheck(noun);
    if (bingo == true) {
      break;
    }
  }
}

function ceiling() {
  for (max = 0; ; max++) {
    nounCheck(max);
    if (bingo == true) {
      break;
    }
  }
  return output;
}


console.log(ceiling())