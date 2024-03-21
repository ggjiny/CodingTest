function solution(prices) {
    let arr = [];
    let count = 0;
    for(let i=0; i<prices.length-1; i++){
        for(let j=i+1; j<prices.length;j++){
            count++;
            if(prices[i]>prices[j])  break;
        }
        arr.push(count);
        count = 0;
    }
    arr.push(0)
    return arr
}