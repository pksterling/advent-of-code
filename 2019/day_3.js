const wirePath1 = "R8,U5,L5,D3";
const wirePath2 = "U7,R6,D4,L4";
const wireArray1 = wirePath1.split(',');
const wireArray2 = wirePath2.split(',');
var wireTrail1;
var wireTrail2;

function instruction(item, wireTrail) {
    var dir = item.charAt(0);
    var dist = item.slice(1);
    for (i = 0;  i < dist; i++) {
        var lastTrail = [...wireTrail];
        var curPos = [lastTrail[lastTrail.length - 1][0], lastTrail[lastTrail.length - 1][1]];
        if (dir == 'U') {
            curPos[1]++
        } else if (dir == 'D') {
            curPos[1]--
        } else if (dir == 'L') {
            curPos[0]--
        } else if (dir == 'R') {
            curPos[0]++
        }
        wireTrail.push(curPos);
    }
}

function journey(wireArray) {
    var wireTrail = [[0,0]]
    for (j = 0; j < wireArray.length; j++) {
        var item = wireArray[j];
        instruction(item, wireTrail);
    }
    return wireTrail;
}

function intersect(a, b) {
    var d = {};
    var results = [];
    for (var i = 0; i < b.length; i++) {
        d[b[i]] = true;
    }
    for (var j = 0; j < a.length; j++) {
        if (d[a[j]]) 
            results.push(a[j]);
    }
    return results;
}

function match() {
    var wireTrail1 = journey(wireArray1);
    var wireTrail2 = journey(wireArray2);
    return intersect(wireTrail1, wireTrail2);
}

function distCalc(pos) {
    return Math.abs(pos[0]) + Math.abs(pos[1]);
}

function minAdd() {
    return match().forEach(distCalc);
}

function boopBoop() {
    return Math.min(...match());
}

console.log(minAdd())