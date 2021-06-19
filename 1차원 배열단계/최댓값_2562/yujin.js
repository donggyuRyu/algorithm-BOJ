// 틀렸는데 그이유는 기존 input값이 회손되서 그렇다고함
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
  input.push(line);
//   rl.close();

}).on("close", function() {
let sorted = input.sort((a,b) => (a-b));
let max = sorted[sorted.length-1];
console.log(max);
console.log(input.indexOf(max));
rl.close();

process.exit();
});