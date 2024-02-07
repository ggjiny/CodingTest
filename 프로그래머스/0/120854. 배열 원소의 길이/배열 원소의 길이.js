function solution(strlist) {
    let lengthList = [];
    strlist.forEach((str)=>{
        lengthList.push(str.length)
    })
    return lengthList
}