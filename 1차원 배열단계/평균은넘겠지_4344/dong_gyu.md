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
        const scoreArray = input[i].split(' ').map(Number);
        const studentNum = scoreArray[0];
        let sumScore = scoreArray.reduce((a, b) => a + b, -studentNum);
        let avgScore = sumScore / studentNum;
        let compareScore = 0;
        for (let j = 1; j <= studentNum; j++) {
            if (scoreArray[j] > avgScore) {
                compareScore++;
            }
        } console.log(((compareScore/studentNum) * 100).toFixed(3) + '%')
    }
    process.exit();
})
```
