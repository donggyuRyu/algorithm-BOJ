// 모르게씀.. -하면 0됨, push와 join을 써보거나 이중 for문 활용?
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
  input.push(line);
  rl.close();

}).on("close", function() {
const N = input[0];

hap = ''
blank = ''
// 공백 = 4,3,2,1,0
for(let i = 1; i<= Number(N); i++){
  // console.log('*')//NaN
  hap += '*'
  blank += ' '
  console.log(blank+hap)
}

  process.exit();
});