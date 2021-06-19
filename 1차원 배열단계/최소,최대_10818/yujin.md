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
let num = input[1].split(' ')
num.sort((a,b) => a-b)
console.log(num[0]+' '+num[num.length -1])

rl.close();

  process.exit();
});
```
* 틀렸던이유 : 백준에서는 input[0]에서 입력숫자 input[1]에 답이나와야하는데
나의 답에서는 input[0]에서 입력숫자와 답이나와서그랬음