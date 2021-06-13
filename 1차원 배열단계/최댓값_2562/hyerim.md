https://www.acmicpc.net/problem/2562

```javascript
const readline = require("readline");
const { POINT_CONVERSION_COMPRESSED } = require("constants");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let num = input.map(Number);
  let tempNum = num.slice();

  tempNum = tempNum.sort((a, b) => {
    return a - b;
  });

  let maxNum = tempNum[tempNum.length - 1];
  let maxIndex = num.indexOf(maxNum) + 1;
  console.log(maxNum); // 85
  console.log(maxIndex); //8
});
```
