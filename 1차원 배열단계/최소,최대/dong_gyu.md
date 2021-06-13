```
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input =[];
rl.on('line',function(line){
    input.push(line)
}).on('close',function(){
    let countNum = +input[0]
    let numArray = input[1].split(' ').map(Number)
    numArray.sort((a, b) => a - b);
    console.log(numArray[0], numArray[countNum-1]);
    process.exit();
})
```
