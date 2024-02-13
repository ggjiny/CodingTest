function solution(numer1, denom1, numer2, denom2) {
    let arr = [numer1*denom2+numer2*denom1, denom1*denom2];
    let [a,b] = arr;
    for(let i=b; i>1;i--){ 
        if(a%i=== 0 && b%i===0){ 
            a /= i;
            b /= i;
            break;
        }
    }
    return [a,b];
}