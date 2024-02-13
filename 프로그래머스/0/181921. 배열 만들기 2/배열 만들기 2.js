function solution(l, r) {
    let arr = [];
    let result;
    let regex = /^5([05]{1,6})?$/
    
    for(let i=l; i<=r; i++){
        arr.push((i)) //.toString()
    }
    result = arr.filter((num)=>{
        return regex.test(num)
    })
    
    return result.length? result: [-1]
}