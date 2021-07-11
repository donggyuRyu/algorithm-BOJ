```
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    const countNum = +input[0];
    for (let i = 0; i < countNum; i++) {
        let answer = '';
        const multypleNum = +input[i + 1].split(' ')[0];
        const string = input[i + 1].split(' ')[1];
        for (let j = 0; j < string.length; j++) {
            answer += string.split('')[j].repeat(multypleNum);
        }
        console.log(answer)
    }

    process.exit();
})
```
