```
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input = line.trim()
}).on('close', function () {
    const croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
    for ( let alphabet of croatiaAlphabet){
        input = input.split(alphabet).join('c') //join('c')에서 c는 아무의미없이 그저 input.length를 세기위한 도구로만 사용한다 a든 z든 A든 상관없다
    }
    console.log(input.length)

    process.exit();
})
```
