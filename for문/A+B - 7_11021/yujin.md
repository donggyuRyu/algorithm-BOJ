```javascript
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
const N = input[0];

for(let i = 1; i<= Number(N); i++){
    let num1 = input[i].split(' ')[0];
    let num2 = input[i].split(' ')[1];
  console.log("Case #"+i+": "+(Number(num1)+Number(num2)));
}

  process.exit();
});
```