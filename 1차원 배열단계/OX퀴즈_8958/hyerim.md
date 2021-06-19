```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let testCount = input[0];

  for (let i = 1; i <= testCount; i++) {
    let count = 1;
    let sumEach = 0;
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "O") {
        sumEach += count;
        count++;
      } else count = 1;
    }
    console.log(sumEach);
  }
});
```
