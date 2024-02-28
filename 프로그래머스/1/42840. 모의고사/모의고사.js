function solution(answers) {
    let p1 = [1,2,3,4,5]
    let p2 = [2,1,2,3,2,4,2,5]
    let p3 = [3,3,1,1,2,2,4,4,5,5]
    let count = [0,0,0]
    let answer =[];
    let maxCount = 0;
    
    answers.forEach((num, i)=> {
        p1[i%p1.length] === num ? count[0]++: null;
        p2[i%p2.length] === num ? count[1]++: null;
        p3[i%p3.length] === num ? count[2]++: null;
    })
    maxCount = Math.max(...count);
    
    for(let i=0; i<3;i++){
        maxCount === count[i] ? answer.push(i+1):null   
    }
    return answer
}