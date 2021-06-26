https://www.acmicpc.net/problem/2908

```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let input = line.split(" ");
  let inputRevers = [];
  for (number of input) {
    inputRevers.push(number.split("").reverse().join(""));
  }
  let number1 = inputRevers[0];
  let number2 = inputRevers[1];
  let Max = Math.max(number1, number2);

  console.log(Max);
  rl.close();
});
```
