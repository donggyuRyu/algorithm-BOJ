```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let input = line;

  if (1 <= input && input <= 100) {
    for (let i = 1; i <= input; i++) {
      console.log("*".repeat(i).padStart(input));
      if (i == input) break;
    }
  }

  rl.close();
});
```
