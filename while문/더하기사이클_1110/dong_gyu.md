```
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input = line.split(' ')
}).on('close', function () {
    let cycleNum = +input[0]
    let cycleLength = [];
    if (cycleNum < 10) {
        cycleNum = cycleNum * 10;
    }
    while (true) {
        cycleLength.push(cycleNum);
        cycleNum = (cycleNum % 10 * 10) + (parseInt(cycleNum / 10) + cycleNum % 10) % 10;
        if (cycleLength[0] == cycleNum) {
            console.log(cycleLength.length);
            break;
        }
    }
}
)
```
