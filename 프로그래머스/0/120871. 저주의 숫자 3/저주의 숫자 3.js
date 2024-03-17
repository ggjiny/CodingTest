function solution(n) {
    let arr = [];
    for(let i=1; arr.length<n;i++){
        if(i%3 !== 0 && !(/3/g).test(i)){arr.push(i)}
    }
     return arr.at(-1)
}