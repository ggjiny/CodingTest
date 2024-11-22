function solution(N, stages) {
    let arr = [];
    let user = stages.length;
    stages.sort((a,b)=>b-a);
    for(let j=1; j<=N;j++){
        let sum = 0;
        for(let i=user-1; i>=0;i--){
            if(stages[i]===j) {
                sum++;
                stages.pop()
            }
            else break;
        }
        arr.push(sum/user || 0);
        user-=sum;
    }
    
    let arr2 = [];
    for(let i=0; i<arr.length;i++){
        let obj = {};
        obj.num = i+1;
        obj.ratio = arr[i];
        arr2.push(obj)
    }
    
    arr2.sort((a,b)=>b.ratio==a.ratio?a.ratio-b.ratio : b.ratio-a.ratio)
    return arr2.map((obj)=>obj.num)
}