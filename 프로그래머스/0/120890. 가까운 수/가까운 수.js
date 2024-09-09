function solution(array, n) {
    let minus = 101;
    let now = 101;
    array.sort((a,b)=>a-b)
    for(let num of array){
        if(num-n<minus) {
            minus = Math.abs(num-n); 
            now = num;
        }
    }
    return now
}