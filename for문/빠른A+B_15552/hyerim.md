https://www.acmicpc.net/problem/15552

```javascript
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = Number(input[0]);
let answer = "";

for (let i = 1; i <= count; i++) {
  let num = input[i].split(" ");
  answer += Number(num[0]) + Number(num[1]) + "\n";
  if (i === input.length) break;
}
console.log(answer);
```
