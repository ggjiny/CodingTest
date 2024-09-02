function solution(cards1, cards2, goal) {
    let count1=0;
    let count2=0;
    let totalCount = 0;
    for(let i=0; i<goal.length; i++){
        if(goal[i] === cards1[count1]){
            count1++;
            totalCount++;
        }
        if(goal[i] === cards2[count2]){
            count2++;
            totalCount++;
        }
    }
    return goal.length===totalCount ? "Yes":"No"
}