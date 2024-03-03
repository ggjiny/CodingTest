function solution(people, limit) {
    let count = 0;
    let num = 0;
    let countArr = [];
    people.sort((a,b)=>a-b);
    for(let i=0; i< Math.floor(people.length/2); i++){
        for(let j=people.length-1-i-num; j > i; j--){
            if(people[i]+people[j]<=limit){
                count++;
                break;
            }else{
                num++;
            }
        }
        if(count === 0){return people.length}
    }
    return people.length - count
}
//[10, 10, 10, 60, 80, 90]
//[10, 10, 10,20,  60, 80, 90]
//[ 50,50, 70,80, ]