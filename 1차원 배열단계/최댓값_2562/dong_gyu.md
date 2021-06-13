```
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const numbers = input.map(x => Number(x));
    let maxNum = numbers[0];
    let maxIdx = 0;

    for (let i = 0; i < 9; i++) {
        if (maxNum < numbers[i]) {
            maxNum = numbers[i];
            maxIdx = i;
        }
    }
    console.log(maxNum);
    console.log(maxIdx+1);
    process.exit();
});
```
