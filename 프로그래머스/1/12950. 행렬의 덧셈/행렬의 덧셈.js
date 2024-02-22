function solution(arr1, arr2) {
    return arr1.map((oneArr, idx)=>{
        for(let i=0; i< oneArr.length; i++){
            oneArr[i] += arr2[idx][i];
        }
        return oneArr
    })
    //return newArr;
}