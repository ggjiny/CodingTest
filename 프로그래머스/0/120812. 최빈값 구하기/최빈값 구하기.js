function solution(array) {
    let obj = {};
    let count = 0;
    let maxNum = 0;
    let maxCount = 0;
    let sameCount = 0;
    array.forEach((num)=>{
        if(obj[num]){
            obj[num]++;
        }else{
            obj[num] = 1;
        }
    })
    
    for (let num in obj){
       if(maxCount < obj[num]){
           maxNum = num;
           maxCount = obj[num];
       }else if(maxCount === obj[num]){
           sameCount = maxCount;
       }
    }
    return sameCount === maxCount ? -1 : Number(maxNum);
}