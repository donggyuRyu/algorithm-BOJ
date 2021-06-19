# 1번째 시도. 틀렸습니다.
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
  let standardNum = input[0].split(" ")[1];
  let compareNums = input[1].split(" ");

  let result = [];
  compareNums.forEach((num) => {
    if (+num < +standardNum) {
      result.push(num);
    }
  });
  console.log(result);
});
```
# 2번째 시도. 맞았습니다
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
  let standardNum = input[0].split(" ")[1];
  let compareNums = input[1].split(" ");
  let result = [];

  compareNums.forEach((num) => {
    if (+num < +standardNum) {
      result.push(num);
    }
  });
  console.log(result.join(" "));
});
```
