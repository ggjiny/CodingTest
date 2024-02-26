
function solution(n) {
    function fact(num){
        let result=1;
        for(let i=1; i<=num;i++){
            result *= i;
        }
        return result
    }
   //i=4 fact(4) >= 7 && fact(3) <=7
    for(let i=2; i<=11;i++){
        if(fact(i)>n && fact(i-1) <= n){
            return i-1
        }
    }
}