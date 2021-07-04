const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", function(line) {
    input.push(line);
    // rl.close()
}).on("close", function() {
    let count = input[1].split('');

    let hap = 0;
    for(let i = 0; i<count.length; i++){
		hap = hap + Number(count[i])
    }

    console.log(hap)
    rl.close()

    process.exit();
});