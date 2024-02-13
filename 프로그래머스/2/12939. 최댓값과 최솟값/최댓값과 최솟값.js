function solution(s) {
    let arr = s.split(" ")//.sort((a,b)=>a-b).map(Number)
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return `${min} ${max}`
}