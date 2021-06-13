```
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    let testNum = Number(input[0])
    let numberArray = [];
    for (let i = 1; i <= testNum; i++) {
        numberArray.push(input[i].split(' '))
    }
    for (let i = 0; i < testNum; i++) {
        let num1 = Number(numberArray[i][0]);
        let num2 = Number(numberArray[i][1]);

        console.log(num1 + num2)
    }
})
```
