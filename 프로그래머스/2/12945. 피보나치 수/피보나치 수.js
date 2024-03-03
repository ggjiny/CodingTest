
function solution(n) {
    let arr=[0,1]
    for(let i=0; i<n-1;i++){
        arr.push((arr[i]+arr[i+1])%1234567);
    }   
    return arr[arr.length-1]
}