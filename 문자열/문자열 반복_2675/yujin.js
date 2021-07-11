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

	// S = 문자열 예)abc
	// R = 숫자 예)3
	// P = 결과 예) aaabbbccc

	let count = input[0];
	// let P = ''
	for(let i = 1; i<=count; i++){
		let R = input[i].split(' ')[0];//3
		let S = input[i].split(' ')[1];//abc
		let P = ''
		for(let j = 0; j<S.length; j++){
			P = P + S[j].repeat(R)
			// P += S.split('')[j].repeat(R)
		}
		console.log(P)
		// P = ''
	}

	rl.close();

	process.exit();
});