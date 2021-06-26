(https://www.acmicpc.net/status?user_id=thinkerring&problem_id=11720&from_mine=1)


```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", () => {
  let num = input[1].split("");
  let result = 0;
  num.forEach((number) => {
    result += +number;
  });
  console.log(result);
});
```
