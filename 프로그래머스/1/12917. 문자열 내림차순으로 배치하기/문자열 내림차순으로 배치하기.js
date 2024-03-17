function solution(s) {
    let arr = s.split("");
    let lower = [];
    let upper = [];
    for(let i=0; i<arr.length;i++){
        if(arr[i].toUpperCase()===arr[i]){
            upper.push(arr[i])
        }else{
            lower.push(arr[i])
        }
    }
    return lower.sort((a,b)=>b.localeCompare(a)).join("") + upper.sort((a,b)=>b.localeCompare(a)).join("") 
}