# [단어공부](https://www.acmicpc.net/problem/1157)
```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let charArray = {};

  for (let chat of line.toUpperCase()) {
    // console.log(chat);
    // H
    // E
    charArray[chat] = charArray[chat] ? charArray[chat] + 1 : 1;
  }
  // console.log(charArray)
  // { H: 1, E: 1, L: 2, O: 1 }

  let apply = Object.values(charArray);
  // console.log(apply);
  // [1, 1, 2, 1]

  let max = Math.max(...apply);
  // console.log(max);
  // 2

  let maxChar = "";
  let isSame = 0;
  for (let char in charArray) {
    if (charArray[char] === max) {
      maxChar = char;
      isSame++;
    }
    if (isSame > 1) {
      console.log("?");
      return;
    }
  }

  console.log(maxChar);
  // L

  rl.close();
}).on("close", () => {
  process.exit();
});
```
