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
    let wordArr = word.toUpperCase().split('');

    let result = {};
    wordArr.forEach((x) => {
        result[x] = (result[x] || 0) + 1;
    });

    console.log(result);
    let set = new Set(wordArr);
    const alphabet = [...set];

    let resultArr = [];
    for (let i = 0; i < alphabet.length; i++) {
        resultArr[i] = Object.entries(result)[i][1]
    }
    resultArr.sort((a, b) => b - a)
    console.log(Object.entries(result))

    let isSame = 0;
    let answer = "";
    for (let [alphabet, value] of Object.entries(result)) {
        if (resultArr[0] == value) {
            answer = alphabet
            isSame++;
        }
        if (isSame > 1) {
            console.log("?")
            return;
        }
    }
    console.log(answer)


    process.exit();
})

```
