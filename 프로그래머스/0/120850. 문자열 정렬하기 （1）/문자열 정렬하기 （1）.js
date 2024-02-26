function solution(my_string) {
    let result = [];
    return my_string.split("").filter((one)=> !isNaN(one)).map((num)=>Number(num)).sort((a,b)=>a-b)
}