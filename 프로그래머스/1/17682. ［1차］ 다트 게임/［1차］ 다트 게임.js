function solution(dartResult) {
    let arr = dartResult.match(/\d+/g).map((num)=>Number(num))
    let dart = dartResult.split(/\d+/);

    for(let i=1; i<dart.length;i++){
        if(dart[i].includes('D')){
            arr[i-1] *= arr[i-1]
        }else if(dart[i].includes('T')){
            arr[i-1] *= arr[i-1]*arr[i-1]
        }

        if(dart[i].includes('*')){
            arr[i-1] *= 2;
            if(i>1){ arr[i-2] *=2}
        }
        if(dart[i].includes('#')){
            arr[i-1] *= -1;
        } 
    }
    return arr[0] + arr[1] + arr[2]
}