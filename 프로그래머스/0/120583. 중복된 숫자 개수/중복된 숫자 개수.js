function solution(array, n) {
    let count = 0;
    let idx = 0;
    let num = 0;
    for(let i=0; i<array.length;i++){
        num = array.indexOf(n,idx);
        if(num === -1){
            return count;
        }else{
            count++;
            idx = num+1;
        }
    }
    // while(num !== -1){
    //     num = array.indexOf(n,idx);
    //     idx = num;
    //     count++;
    // }
    return count;
}