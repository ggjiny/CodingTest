function solution(n, k) {
    let sum = n*12000 + (k - Math.floor(n/10))*2000
    return sum
}