function solution(d, budget) {
    d.sort((a,b)=>a-b)
    let count = 0;
    for(let item of d){
        budget -= item;  
        if(budget >= 0){
            count++;
        }
        
    }
    return count
}