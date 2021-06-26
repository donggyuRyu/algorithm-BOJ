const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", function(line) {
    input.push(line);
    rl.close()
}).on("close", function() {
    let ask = input[0];
    let result = []
    // console.log(ask.indexOf('a')+' '+ask.indexOf('b'))
  // let string = ''
    //String.fromCharCode(98)
    for(let i = 97; i<=122; i++){
      // console.log(String.fromCharCode(i))
      result.push(ask.indexOf(String.fromCharCode(i)))
    }
    console.log(result.join(' '))
    process.exit();
});