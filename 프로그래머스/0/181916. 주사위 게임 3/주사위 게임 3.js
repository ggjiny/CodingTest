function solution(a, b, c, d) {
    let arr = [a,b,c,d].sort((a,b)=>a-b);
    if(arr[0]===arr[2]){
        if(arr[2]===arr[3]){
            return arr[3]*1111;        
        }else{
            return (10*arr[0] + arr[3])**2
        }
    }else if(arr[0] === arr[1]){
        if(arr[2] === arr[3]){
            return (arr[0]+arr[2]) * Math.abs(arr[0]-arr[2])
        }else{
            return arr[2] * arr[3]
        }
    }else if(arr[1]===arr[2]){
        if(arr[2]===arr[3]){
            return (10*arr[3] + arr[0])**2
        }else{
            return arr[0] * arr[3]
        }
    }else if(arr[2]===arr[3]){
        return arr[0] *arr[1]
    }
    else{
        return arr[0]
    }
}