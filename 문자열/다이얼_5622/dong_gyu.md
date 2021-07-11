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
    const phoneNum = input[0];
    let phoneNumArr = phoneNum.split('');
    let time = 0;
    // console.log(phoneNumArr[1].charCodeAt(0))
    for (let i = 0; i < phoneNumArr.length; i++) {
        switch (phoneNumArr[i].charCodeAt(0)) {
            case 65: //A의 ASCII는 65
            case 66:
            case 67:
                time += 3
                break;
            case 68:
            case 69:
            case 70:
                time += 4
                break;
            case 71:
            case 72:
            case 73:
                time += 5
                break;
            case 74:
            case 75:
            case 76:
                time += 6
                break;
            case 77:
            case 78:
            case 79:
                time += 7
                break;
            case 80:
            case 81:
            case 82:
            case 83:
                time += 8
                break;
            case 84:
            case 85:
            case 86:
                time += 9
                break;
            case 87:
            case 88:
            case 89:
            case 90: //Z 의 ASCII는 90
                time += 10
                break;
        }
    }
    console.log(time)

    process.exit();
})
```
