```
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", function (line) {
    input = line.split(' ')
}).on("close", function () {
    let endNum = +input[0];
    for (let i =0;i<1000000000;i++) {
       if(endNum <= 1+6*(i*(i+1)/2)){
            console.log(i+1)
            break;
        }   
}
    
    process.exit();
})
```
