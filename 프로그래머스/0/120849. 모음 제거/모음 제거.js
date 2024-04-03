function solution(my_string) {
    let arr = my_string.split(" ");
    let moeum = /[aeiou]/g
    console.log(arr)
    return arr.map((str)=>str.replace(moeum, '')).join(" ")
}