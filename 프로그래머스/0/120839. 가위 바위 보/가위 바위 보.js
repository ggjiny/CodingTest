function solution(rsp) {
    let r="0"
    let s="2"
    let p="5"
    return rsp.split("").reduce((prev, curr)=> {
        let win = curr === p ? s: (curr===s?r:p)
        return prev += win
    },'')
}