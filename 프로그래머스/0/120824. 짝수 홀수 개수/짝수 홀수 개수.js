function solution(num_list) {
    return [num_list.filter((num)=>!(num%2)).length, num_list.filter((num)=>num%2).length]
}