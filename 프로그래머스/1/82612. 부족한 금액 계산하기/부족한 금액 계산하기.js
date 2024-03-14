function solution(price, money, count) {
    let sum = 0;
    while(count > 0){
        sum += count*price;
        count--;
    }
    return sum <= money ? 0 : sum-money
}