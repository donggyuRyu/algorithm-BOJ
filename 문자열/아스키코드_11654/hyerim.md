# [아스키코드](https://www.acmicpc.net/problem/11654)
```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let getASCII = line.charCodeAt();
  console.log(getASCII);
  rl.close();
});
```
