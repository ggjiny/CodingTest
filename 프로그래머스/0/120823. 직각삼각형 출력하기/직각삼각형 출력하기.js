const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = ""

rl.on('line', function (line) {
    input = line.split(' ');
    let star = ""
    
    for(let i=0; i<input; i++){
        for(let j=0; j<=i;j++){
            star += "*"
        }
        result += star + "\n"
        star = ""
    }
}).on('close', function () {
    //console.log(Number(input[0]));
    console.log(result)
});