function solution(n) {
    let answer = [];
    let num = n;
    let i=2;
    while(i <= n){
        if(num%i===0){
            num /= i
            if(!answer.includes(i))
                answer.push(i)
            continue;
        }
        i++
    }
    return answer;
}