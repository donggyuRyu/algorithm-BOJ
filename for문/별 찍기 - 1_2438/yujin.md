```javascript
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
for(let i = 1; i<= Number(N); i++){
  // console.log('*')//NaN
  hap += '*'
  console.log(hap)
}

  process.exit();
});
```