//시간초과 에러
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
  input.push(line);

}).on("close", function() {
const N = Number(input[0])
for(let i=1; i<=N; i++){
  console.log(i)
}
  rl.close();
    

  process.exit();
});