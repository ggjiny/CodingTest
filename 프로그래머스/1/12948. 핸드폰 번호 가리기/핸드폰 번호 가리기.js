function solution(phone_number) {
    let arr = [...phone_number]
    for(let i=0;i<phone_number.length-4;i++){
        arr.splice(i, 1, '*')
    }
    return arr.join('')
}