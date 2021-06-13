https://www.acmicpc.net/problem/2739

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let input = +line;
  let answer;
  for (i = 1; i < 10; i++) {
    let answer = input * i;
    console.log(`${input} * ${i} = ${answer}`);
  }

  rl.close();
});
```
