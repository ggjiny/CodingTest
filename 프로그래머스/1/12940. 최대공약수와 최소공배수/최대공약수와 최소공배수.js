function solution(n, m) {
    let arr = [];
    let min = Math.min(n,m)
    let max = Math.max(n,m);
   
    //최대공약수
    for(let i=min; i>=1;i--){
        if(max%i===0 && min%i===0){
            arr.push(i);
            break;
        }
    }
    //최소공배수
    arr.push(arr[0] * (n / arr[0])* (m / arr[0]));
    // for(let i=max; i<=min*max; i++){
    //     if(i%min ===0 && i%max===0){
    //         arr.push(i)
    //         break;
    //     }
    // }
  return arr
}