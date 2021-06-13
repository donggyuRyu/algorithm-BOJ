https://www.acmicpc.net/problem/10950

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  for (i = 0; i < input.length; i++) {
    let num1 = Number(input[i].split(" ")[0]);
    let num2 = Number(input[i].split(" ")[1]);

    if (!(0 < num1 && num2 < 10)) continue;

    let answer = num1 + num2;

    console.log(answer);
  }
  process.exit();
});
```
