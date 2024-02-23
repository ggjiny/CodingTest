function solution(s) {
    const arr = [];
    const count = {}
    s.split("").forEach((letter, idx)=>{
        if(count[letter] || count[letter] ===0){
            arr.push(idx - count[letter])
            count[letter] = idx;
        }else{
            count[letter] = idx;
            arr.push(-1)
        }
    })
    return arr
}