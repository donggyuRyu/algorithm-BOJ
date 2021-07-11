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
    const word = input[0]
    let answer = '';
    let AtoZarray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i=0; i<AtoZarray.length;i++){
        answer += word.indexOf(AtoZarray[i])+' ';
    }
    console.log(answer)
    
    process.exit();
})
```
