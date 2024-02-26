function solution(n) {
    let arr=[]
    let count=0;
    for(let i=4; i<=n;i++){
        for(let j=1; j<=i;j++){
            if(i%j===0){
                arr.push(j);
            }
        }
        if(arr.length >= 3) count += 1;
        arr = []
    }
    return count
}