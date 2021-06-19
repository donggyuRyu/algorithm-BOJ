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
  let num1 = "";
  let num2 = "";
  let answer = [];
  for (let i = 1; i < input.length; i++) {
    num1 = input[i].split(" ")[0];
    num2 = input[i].split(" ")[1];
    if (num1 > 0 && num2 < 10) {
      answer = +num1 + +num2;
    }
    console.log(`Case #${i}: ${answer}`);

    if (i == input[0]) break;
  }
});
````
