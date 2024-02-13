function solution(numbers) {
    let arr = Array.from({length : 10},(_, i)=> i++)
    let sum = 0;
    
    arr.forEach(num=>numbers.includes(num)?null:sum+=num)
    return sum;
}