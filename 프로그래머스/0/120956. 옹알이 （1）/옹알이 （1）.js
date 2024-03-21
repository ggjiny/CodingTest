function solution(babbling) {
    let ong = ["aya", "ye", "woo", "ma"];
    let count = 0;
    for(let i=0; i<babbling.length;i++){
        for(let j=0; j<ong.length;j++){
            if(babbling[i].includes(ong[j])){
                let idx = babbling[i].indexOf(ong[j])
                babbling[i] = babbling[i].replace(ong[j], " ")
            }
        }
    }
    babbling.map((one)=>{
        if(one.trim() === "") count++;
    })
    
    return count
}