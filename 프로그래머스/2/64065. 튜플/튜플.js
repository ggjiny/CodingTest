function solution(s) {
    let arr = s.split(",{").join(" ").replace(/[\{\}]/g, "").split(" ")
    arr.sort((a,b)=>a.length-b.length)
    
    let answer = [];
    answer.push(Number(arr[0]));
    
    for(let i=1; i<arr.length;i++){
        let beforeStr = arr[i-1].split(",");
        let index = arr.indexOf(beforeStr);
        arr[i].split(",").forEach((num)=>{if(!answer.includes(Number(num))){ answer.push(Number(num))}})
    }
    
    return answer;
}