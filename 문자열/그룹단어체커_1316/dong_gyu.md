```
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    const countNum = +input[0];
    let countGroupWord = 0;

    for (let i = 1; i <= countNum; i++) {
        const word = input[i]
        const letter = [];
        let isGroupWord = true;
        for (let j = 0; j < word.length; j++) {
            if (letter.indexOf(word[j]) === -1) {
                letter.push(word[j]);
            } else if (letter.indexOf(word[j]) !== letter.length - 1) {
                isGroupWord = false;
                break;
            }
        }
        if (isGroupWord) {
            countGroupWord++;
        }

    }

    console.log(countGroupWord)


    process.exit();
})
```
