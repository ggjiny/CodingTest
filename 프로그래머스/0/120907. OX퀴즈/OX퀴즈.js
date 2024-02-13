function solution(quiz) {
    let arr = [];
    let result = []
    quiz.forEach((oneQ)=>{
        arr.push(oneQ.split(" "))
    })
    arr.forEach((exp)=>{
        if(exp[1] === '-'){
            Number(exp[0])-Number(exp[2]) === Number(exp[4]) ? result.push("O") : result.push("X")
        }else{
            Number(exp[0])+Number(exp[2]) === Number(exp[4]) ? result.push("O") : result.push("X")
        }
        
    })
    return result
}