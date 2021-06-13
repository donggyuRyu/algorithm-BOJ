https://www.acmicpc.net/problem/2741

```javascript
let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);
```
