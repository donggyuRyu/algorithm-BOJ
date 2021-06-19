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
let a = input[0]
let b = input[1]
let c = input[2]
// console.log(a * b * c)
let result = a*b*c//18900
result = result.toString().split('')//['1', '8', '9', '0', '0']
for(let i = 0; i<10; i++){
    console.log(result.filter(x => x === i.toString()).length)
}
rl.close();

process.exit();
});
```
* 알게된점:split()을하려면 문자열이어야함