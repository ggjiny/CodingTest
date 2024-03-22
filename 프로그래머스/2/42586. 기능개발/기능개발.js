function solution(progresses, speeds) {
    let days = [];
    let count = 1;
    let result = [];
    let flag = 0;
    progresses.forEach((progress, i)=>{
        days.push(Math.ceil((100-progress)/speeds[i]))
    })
    for(let i=1; i<=days.length;i++){
        if(days[flag] >= days[i]){
            count++;
        }else{
            result.push(count);
            flag = i;
            count = 1;
        }
    }
    return result;
}
