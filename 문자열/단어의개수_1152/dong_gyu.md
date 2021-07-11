```
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input = line.trim().split(' ')
}).on('close', function () {
    if(input[0] ===""){
        input.pop()
    }
    console.log(input.length)
    
})
```
