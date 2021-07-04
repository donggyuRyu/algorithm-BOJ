const { count } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on("line", function(line) {
	input.push(line);
	// rl.close();
}).on("close", function() {
	// let ask = input[0];
	// console.log(ask.charCodeAt());
	let count = Number(input[0])//2
	hap = {}
	for(let i = 1; i<count+1; i++){
		hap += input[i].split(' ')//input[0],input[1]
	}
	rl.close();

	// console.log(hap)
	// let ask = input[1];
	// console.log(ask.split(' '))//3, ABC
	
	// hap = ''
	// for(let i = 0; i<; i++){

	// }
	// hap += ask.split[1][i]
	process.exit();
});