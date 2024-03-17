function solution(n, arr1, arr2) {
    let result = [];
    arr1 = arr1.map((num)=>num.toString(2).padStart(n, '0').split(""));
    arr2 = arr2.map((num)=>num.toString(2).padStart(n, '0').split(""));
    
    let str = '';
    for(let i=0; i<n;i++){
        for(let j=0; j<n;j++){
            if(+arr1[i][j] || +arr2[i][j]) str += "#"
            else str += " "
        }
        result.push(str)
        str = ""
    }
    return result;
}