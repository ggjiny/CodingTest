function solution(k, tangerine) {
    const countT = {};
    let answer=0;
    
    tangerine.forEach((num)=> (countT[num] = (countT[num] || 0)+1 ))
    
    const countArr = Object.values(countT).sort((a,b)=>b-a)
    
    for (const t of countArr) {
        answer++;
        if (k > t) k -= t;
        else break;
    }
    
    return answer;
}