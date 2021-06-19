```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
  //   rl.close();
}).on("close", function () {
  let multiple = 1;
  input.forEach((num) => {
    return (multiple *= num);
  });

  for (let i = 0; i < 10; i++) {
    let result = String(multiple).split(String(i)).length - 1;
    console.log(result);
  }
});
```
