function solution(emergency) {
    let arr = emergency.slice().sort((a,b)=>b-a)
    let result = [];
    emergency.forEach((num)=>{
        result.push(arr.indexOf(num)+1)
    })
    return result
}