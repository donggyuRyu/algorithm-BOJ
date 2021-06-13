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
    let answer = '';
    let i = 0;
    while (true) {
        let num1 = +input[i].split(' ')[0];
        let num2 = +input[i].split(' ')[1];
        answer = num1 + num2;
        if (!answer) {
            break;
        }
        console.log(answer);
        i++;
    }
})
```
