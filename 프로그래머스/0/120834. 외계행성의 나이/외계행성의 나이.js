function solution(age) {
    return age.toString().split("").map((num)=>String.fromCharCode(num.charCodeAt()+49)).join("")
}