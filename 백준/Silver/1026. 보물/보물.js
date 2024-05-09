const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arrA = input[1].split(" ").map(Number);
const arrB = input[2].split(" ").map(Number);

arrA.sort((a, b) => a - b);
arrB.sort((a, b) => b - a);

let result = 0;

for (let i = 0; i < arrA.length; i++) {
    result += arrA[i] * arrB[i];
}

console.log(result)