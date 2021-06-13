https://www.acmicpc.net/problem/8393

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let input = +line;
  let answer = 0;

  if (1 <= input && input <= 10000) {
    for (i = 1; i <= input; i++) {
      answer += i;
    }
  }
  console.log(answer);

  rl.close();
});
```
