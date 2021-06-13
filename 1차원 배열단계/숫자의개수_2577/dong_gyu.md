const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    let result = 1;
    for (let i = 0; i < 3; i++) {
        result *= +input[i]
    }
    result = String(result);
    for (let i = 0; i <= 9; i++) {
        console.log(result.split(String(i)).length - 1);
    }    
    process.exit();
})
