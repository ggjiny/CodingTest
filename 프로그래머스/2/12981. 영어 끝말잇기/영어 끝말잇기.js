function solution(n, words) {
    let answer =[];
    let said = [];
    for(let i=0; i<words.length;i++){
        if((i>0 && words[i-1].split('').at(-1) !== words[i].split('')[0] )|| said.includes(words[i]))
            return [i%n+1,Math.ceil((i+1)/n)]
        said.push(words[i]);
    }

    return [0,0];
}