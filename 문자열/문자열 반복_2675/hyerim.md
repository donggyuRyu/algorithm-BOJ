https://www.acmicpc.net/problem/2675
```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", () => {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let oneLine = input[i].split("\n");
    let N = oneLine[0].split(" ")[0];
    let string = oneLine[0].split(" ")[1];
    if (!string) continue;
    result = string
      .split("")
      .map((char) => char.repeat(N))
      .join("");
    console.log(result);
  }
});
```
