https://www.acmicpc.net/problem/3052

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
  let restNum = input.map((num) => {
    return +num % 42;
  });

  let differentNum = [];
  restNum.forEach((num) => {
    if (differentNum.indexOf(num) === -1) {
      differentNum.push(num);
    }
  });
  console.log(differentNum.length);
});
```
