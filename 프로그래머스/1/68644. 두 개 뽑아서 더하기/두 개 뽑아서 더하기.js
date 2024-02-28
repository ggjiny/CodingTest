function solution(numbers) {
    let arr=[];
    let sum=0;
    for(let i=0; i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++ ){
            sum = numbers[i] + numbers[j];
            !arr.includes(sum) && arr.push(sum)
        }
    }
    return arr.sort((a,b)=>a-b)
}