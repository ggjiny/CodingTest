
function solution(n) {
    let i=0;
    let fact=1;
    while(fact <= n){
        fact *=++i;
    }
    return i-1;
}