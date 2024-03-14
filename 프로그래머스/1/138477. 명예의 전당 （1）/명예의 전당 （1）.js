function solution(k, score) {
    let arr = [];//score.slice(0, k).sort((a,b)=>b-a);  //명예의 전당
   // let result = Array.from({length: k}, ()=>arr[k-1]) // 최하위
    let result = [];
    for(let i=0;i<score.length;i++){
        arr.push(score[i]); 
        arr = arr.sort((a,b)=>b-a).slice(0, k, 0);
        result.push(arr[arr.length-1])
    }
    return result
}