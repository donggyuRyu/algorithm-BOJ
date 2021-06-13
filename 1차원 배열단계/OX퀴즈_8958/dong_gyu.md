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
    const testNum = +input[0]
    for (let i = 1; i <= testNum; i++) {
        let countScore = 0;
        let sumScore = 0;
        const oxPrint = input[i].split('')
        for (let j = 0; j < oxPrint.length; j++) {
            if (oxPrint[j] === 'O') {
                countScore++;
            } else {
                countScore = 0;
            }
            sumScore += countScore;
        }
        console.log(sumScore)
    }
    process.exit();
})
```
