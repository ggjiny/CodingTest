function solution(s){
    let pNum = s.split("").filter((item)=>item==='p' || item==='P').length;
    let yNum = s.split("").filter((item)=>item==='y' || item==='Y').length;
    
    return pNum===yNum
}