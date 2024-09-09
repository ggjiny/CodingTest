function solution(order) {
    let arr = order.toString().split("")
    let count = 0;
    arr.forEach((num)=> {if(num !== '0' && num%3===0) count++})
    console.log(arr)
    return count;
}