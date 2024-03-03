function solution(arr) {
    let i=0;
    let stk = [];
    while(arr.length > i){
        if(!stk.length){
            stk.push(arr[i]);
            i++;
        }else{
            if(stk[stk.length-1] < arr[i]){
                stk.push(arr[i]);
                i++;
            }else{
                stk.splice(stk.length-1, 1)
            }
        }
    }
    return stk
}