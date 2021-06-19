```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let N = +input[0];

  for (let i = 1; i <= N; i++) {
    let eachCase = input[i].split(" ");

    // 더하기
    let eachSum = 0;
    for (let j = 1; j < eachCase.length; j++) {
      eachSum += +eachCase[j];
    }

    // 평균 구하기
    let reverage = eachSum / (eachCase.length - 1);

    // 평균 넘는 학생수 구하기
    let highScoreStudent = 0;
    for (let k = 1; k < eachCase.length; k++) {
      if (reverage < eachCase[k]) {
        highScoreStudent++;
      }
    }

    // 평균 넘는 학생수 비율 구하기
    let result =
      ((highScoreStudent / (eachCase.length - 1)) * 100).toFixed(3) + "%";
    console.log(result);
  }
});
```
