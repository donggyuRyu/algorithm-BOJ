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
    let remaind = [];
    for (let i = 0; i < 10; i++) {
        remaind.push(input[i] % 42)
    }
    const deletenum = remaind.filter((num, index) => {
        return remaind.indexOf(num) === index;
    })
    console.log(deletenum.length)
})
```
