```
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input = line.split(' ')
}).on('close', function () {
    function reverseInt(n){
        const reversed =n
        .split('')
        .reverse()
        .join('');
        return parseInt(reversed)
    }
    let num1 = reverseInt(input[0])
    let num2 = reverseInt(input[1])
    if(num1<num2){
        console.log(num2)
    } else {
        console.log(num1)
    }


    process.exit();
})
```
