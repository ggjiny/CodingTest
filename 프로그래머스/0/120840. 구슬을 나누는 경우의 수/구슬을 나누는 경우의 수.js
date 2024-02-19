function factorial(num) {
  if (num === 0 || num === 1)
    return 1;

  for (let i = num-1; i > 1; i--) {
    num *= i;
  }
  return num;
}

function solution(balls, share) {
   let top = factorial(balls);
    let bottom = factorial(balls-share) * factorial(share)
    return Math.round(top/bottom)
}