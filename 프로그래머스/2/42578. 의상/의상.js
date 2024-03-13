function solution(clothes) { 
    let obj = {};   
    let multiple = 1; 
    clothes.forEach((item)=>{
        obj[item[1]] ? obj[item[1]]++ : obj[item[1]] = 1
    })
    let countArr = Object.values(obj)
    for(let i=0; i< countArr.length; i++){
        multiple *= countArr[i]+1;
    }
    return multiple -1;
}