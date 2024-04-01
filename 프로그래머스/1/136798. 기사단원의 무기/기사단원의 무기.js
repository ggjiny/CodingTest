function solution(number, limit, power) {
    let count = 0;
    let sum = 0;
    for(let i=1; i<=number;i++){
        let check=false;
        for(let j=1; j<=Math.sqrt(i);j++){
            if(i%j===0) count++;
            if(j === Math.sqrt(i)){
                check =true;
            }
        }
        if(check){
            count=count*2-1
        }else{
            count=count*2
        }
        if(count > limit){ count = power}
        sum+= count
        count = 0;
    }
    return sum
}