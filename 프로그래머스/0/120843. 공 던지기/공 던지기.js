function solution(numbers, k) {
    let num = 2*(k-1) % numbers.length;
    return numbers[num]
}
//1 2 3 1 2 3
//4 == 1