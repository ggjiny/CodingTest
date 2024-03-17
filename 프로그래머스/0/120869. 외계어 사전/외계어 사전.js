function solution(spell, dic) {
    let count = 0;
    let result = 0;
    for(let i=0; i<dic.length;i++){
        for(let j=0; j<spell.length;j++){
            if(dic[i].includes(spell[j])){
                count++;
            }
        }
        if(count === spell.length){
            result++;
        }
        count = 0;
    }
    return result ? 1 : 2
}