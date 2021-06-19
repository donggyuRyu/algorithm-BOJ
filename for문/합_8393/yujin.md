```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
  input.push(line);
  rl.close();

}).on("close", function() {
  hap = 0
  for(i = 1; i<=Number(input); i++){
    hap += i
  }
  console.log(hap)

  process.exit();
});
```