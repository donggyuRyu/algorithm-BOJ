```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
    let num = Number(input);
    for(let i = 1; i<10; i++){
        console.log(num +' * '+ i +' = ' + num*i)
    }
    process.exit();
});
```