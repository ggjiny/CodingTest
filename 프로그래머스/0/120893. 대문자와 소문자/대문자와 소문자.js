function solution(my_string) {
    return my_string.split("").map((item)=> item.toLowerCase()===item?item.toUpperCase():item.toLowerCase()).join("")
    
}