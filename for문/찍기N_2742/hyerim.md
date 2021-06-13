https://www.acmicpc.net/problem/2742

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let num = Number(line);
  // let answer = "";
  let answer = [];

  if (num <= 100000) {
    for (let i = num; i > 0; i--) {
      answer.push(i);
    }
  }

  console.log(answer.join("\n"));

  rl.close();
});
```
