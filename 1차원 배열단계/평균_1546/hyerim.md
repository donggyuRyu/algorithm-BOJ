https://www.acmicpc.net/problem/1546

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
  let subjectNum = input[0];
  let currentScore = input[1].split(" ");
  let maxScore = Math.max(...currentScore.map(Number));

  let fakeScore = [];
  currentScore.map((num) => {
    return fakeScore.push((num / maxScore) * 100);
  });

  let sum = 0;
  fakeScore.forEach((num) => {
    return (sum += num);
  });
  console.log(sum / subjectNum);
});
```
