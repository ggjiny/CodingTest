function solution(arr) {
    let arr2 = [...arr]
    let small = arr2.sort((a,b)=>a-b)[0]
    arr.splice(arr.indexOf(small), 1)
    return arr.length >1?arr:[-1]
}