function solution(nums) {
    function isPrime(num) {
          const sqrt = parseInt(Math.sqrt(num));

          for(let divider = 2; divider <= sqrt; divider++) {

            if(num % divider === 0) {
              return false;
            }

          }

          return true;
    }
    let count = 0;
    for(let i=0; i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1; k<nums.length;k++){
                if(isPrime(nums[i]+nums[j]+nums[k])){
                    count++;
                    console.log(nums[i]+nums[j]+nums[k])
                }
                
            }
         
        }
    }
    return count
}