function solution(my_string) {
    return my_string.split("").filter((one)=> !isNaN(one)).map((num)=>Number(num)).sort((a,b)=>a-b)
}