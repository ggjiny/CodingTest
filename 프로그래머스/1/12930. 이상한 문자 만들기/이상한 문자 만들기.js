function solution(s) {
    let arr = s.split(" ");
    console.log(arr)
    
    arr = arr.map((word)=>{
        let newWord = word.split("").map((one, i)=>{
            if(i%2) return one.toLowerCase();
            else return one.toUpperCase();
        })
        return newWord.join("")
    })
    return arr.join(" ")
}