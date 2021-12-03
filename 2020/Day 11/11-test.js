var a = ['L', '.', 'L', 'L', '.', 'L', 'L', '.', 'L', 'L']
// console.log(a)

var b = JSON.stringify(a)
// console.log(b)

var c = JSON.parse(b)
// console.log(c)

console.log(JSON.parse(JSON.stringify(a)))