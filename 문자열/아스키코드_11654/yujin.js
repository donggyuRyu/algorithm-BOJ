const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", function(line) {
    input.push(line);
    rl.close()
}).on("close", function() {
    let ask = input[0];
    console.log(ask.charCodeAt())
    process.exit();
});