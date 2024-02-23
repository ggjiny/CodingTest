function solution(hp) {
    const five = Math.floor(hp/5);
    const three = Math.floor(hp%5 / 3)
    const one = Math.floor(hp%5%3)
    return five+three+one
    
}