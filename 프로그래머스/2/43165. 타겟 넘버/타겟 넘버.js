function solution(numbers, target) {
    let count = 0; // 타겟 넘버를 만드는 경우의 수를 저장할 변수
   function calculate(numbers, target, index, sum){
        // 모든 숫자를 다 사용했을 때, 현재 합이 타겟 넘버와 일치하는지 확인합니다.
       if(numbers.length === index){
           if(sum === target){
               count++; // 타겟 넘버를 만드는 경우의 수를 증가시킵니다.
           }
           return;
       }
       // 현재 숫자를 더하거나 뺀 경우를 모두 계산합니다.
       calculate(numbers, target, index+1, sum+numbers[index]); 
       calculate(numbers, target, index+1, sum-numbers[index]);
   }
    calculate(numbers, target, 0, 0)
    return count
}