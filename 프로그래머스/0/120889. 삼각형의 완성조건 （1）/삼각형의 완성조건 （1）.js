function solution(sides) {
    let sum = sides.reduce((acc, num)=> acc += num, 0);
    let max = Math.max(...sides)
    return max < sum-max ? 1 : 2
}