function solution(s) {
    let firstLetter;
    let remain;
    let result;
    let arr;
    
    arr = s.split(" ").map((str, idx)=>{
        firstLetter = str.slice(0,1)
        remain = str.slice(1)
        result  = firstLetter.toUpperCase() + remain.toLowerCase();
        return result
    })
    return arr.join().replaceAll(',', ' ')
    
    
}