```
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", function (line) {
    input = line.split(' ')
}).on("close", function () {
    let nDan = Number(input[0])
    for (let i = 1; i < 10; i++) {
        console.log(nDan + ' * ' + i + ' = ' + nDan * i);
    } process.exit();
})
```
