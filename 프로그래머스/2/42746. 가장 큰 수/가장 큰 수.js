function solution(numbers) {
    const largestNumber = numbers
          .map(String)
          .sort((a, b) => (b+a)-(a+b))
          .join("")
    
    return BigInt(largestNumber).toString();
}