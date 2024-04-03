function solution(my_string) {
    let myArr = my_string.split("").reverse()
    let arr = []
    for(let i=1; i<my_string.length+1;i++){
        arr.push(myArr.slice(0, i).reverse().join(""))
    }
    return arr.sort()
}