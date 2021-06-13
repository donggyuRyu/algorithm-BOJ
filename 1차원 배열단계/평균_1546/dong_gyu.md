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
    const averageNum = input[0];
    let score = [];
    for (let i = 0; i < averageNum; i++) {
        score.push(+input[1].split(' ')[i])
    }
    score = score.sort((a, b) => b - a);
    const maxScore = score[0];
    for (let i = 0; i < score.length; i++) {
        score[i] = score[i] / maxScore * 100
    }
    const avg = score.reduce((a, b) => a + b) / averageNum

    console.log(avg)
    process.exit();
})
```
