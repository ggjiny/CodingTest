function solution(name, yearning, photo) {
    let map = new Map();
    let result = [];
    let sum = 0;
    for(let i=0; i<name.length;i++){
        map.set(name[i], yearning[i])
    }
    console.log(map)
    photo.forEach((one)=>{
        one.forEach((oneName)=>{
            if(map.has(oneName)){
                sum += map.get(oneName)
            }
        })
        result.push(sum);
        sum = 0;
    })
    return result;
}