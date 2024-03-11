function solution(my_string, index_list) {
    let str = ""
    for (let num of index_list){
        str += my_string[num]
        console.log(my_string[num])
    }
    return str;
}