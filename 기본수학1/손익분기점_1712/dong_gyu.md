```
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", function (line) {
    input = line.split(' ')
}).on("close", function () {
    const fixedCost = +input[0];
    const elseCost = +input[1];
    const sellCost = +input[2];
    const profit = sellCost - elseCost;
    const totalprofit = Math.floor(fixedCost / profit) + 1;
    console.log(profit <= 0 ? -1 : totalprofit);
    process.exit();
})
```
