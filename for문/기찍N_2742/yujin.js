//시간초과
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const num = Number(line);

    for (let i = num; i >= 1; i--) {
        console.log(i);
    }

    rl.close();
}).on('close', function () {
    process.exit();
});
