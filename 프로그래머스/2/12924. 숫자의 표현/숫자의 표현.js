function solution(n) {
    let count = 0;
    let sum = 0;
    for(let i=1; i<Math.ceil(n/2);i++){ 
        sum += i;
        for(let j=i+1; j<=Math.ceil(n/2); j++){ 
            sum += j;
            if(sum===n) {count++;sum=0;break;}
            if(sum>n) {sum=0;break;}
        }
    }
    return ++count;
}