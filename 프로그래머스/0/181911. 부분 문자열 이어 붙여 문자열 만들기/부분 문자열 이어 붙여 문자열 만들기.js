function solution(my_strings, parts) {
    return my_strings.map((arr, i)=>{
        return arr.slice(parts[i][0], parts[i][1]+1)
    }).join("")
}