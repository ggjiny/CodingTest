function solution(my_string) {
    let regex = /\d/g
    
    return my_string.match(regex).reduce((acc, curr)=>acc+= +curr,0)
}