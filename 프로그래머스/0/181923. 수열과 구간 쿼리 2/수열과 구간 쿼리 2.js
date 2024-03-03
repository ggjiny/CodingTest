function solution(arr, queries) {
    let result = [];
    let max = [];
    let idx = [];
    queries.forEach((query)=>{
        let [s, e, k] = query
        for(let i=s; i<= e; i++){
            if(arr[i] > k){
                max.push(arr[i]);
                idx.push(i);
            }
        }
        if(max.length){
            result.push(Math.min(...max));
            max = []
        }
        else result.push(-1);
    })
    return result
}