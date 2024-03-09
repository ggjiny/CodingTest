function solution(array, commands) {
    let arr = []
    commands.forEach((command)=>{
        arr.push(array.slice(command[0]-1, command[1]).sort((a,b)=>a-b)[command[2]-1])
    })
    return arr
}