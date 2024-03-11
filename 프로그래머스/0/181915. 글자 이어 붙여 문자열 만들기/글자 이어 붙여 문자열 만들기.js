function solution(my_string, index_list){
    return index_list.reduce((acc, num)=> acc+= my_string[num], "")
}