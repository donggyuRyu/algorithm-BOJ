https://www.acmicpc.net/problem/10818

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
  let count = input[0];
  let numArray = input[1].split(" ").map(Number);
  let min = "";
  let max = "";

  if (1 <= count && count <= 1000000) {
    numArray.sort((a, b) => {
      return a - b;
    });
    min = numArray[0];
    max = numArray[numArray.length - 1];
  }

  console.log(min, max);
});
```
