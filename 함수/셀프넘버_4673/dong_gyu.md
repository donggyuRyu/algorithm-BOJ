```
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
}).on('close', function () {
    const Num = 10000;
    const selfNumArray = Array(Num + 1).fill(false);

    function construct(n) {
        let temp1 = n;
        let construcNum = temp1;

        while (temp1 > 0) {
            construcNum += temp1 % 10;
            temp1 = parseInt(temp1 / 10);
        }
        return construcNum;
    }
    for (let i = 1; i <= Num; i++) {
        selfNumArray[construct(i)] = true;
        if (!selfNumArray[i]) console.log(i);
    }

    process.exit();
})
```
