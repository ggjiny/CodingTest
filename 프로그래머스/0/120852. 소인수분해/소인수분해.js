function solution(n) {
    let answer = [];
    let num = n;
    let i=2;
    while(i <= n){
        if(num%i===0){
            num /= i
            answer.push(i)
        }else{
            i++
        }
    }
    return [...new Set(answer)];
}