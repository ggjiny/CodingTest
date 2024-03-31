function solution(n, lost, reserve) {
    let arr = Array.from({length:n},()=>1);
    for(let i of lost){
        arr[i-1] -= 1;
    }
    for(let i of reserve){
        arr[i-1] += 1;
    }
    for(let i=0; i<arr.length;i++){
        if(arr[i]<1){
            if(i===0){
                if(arr[i+1]>1){
                    arr[i+1] -= 1;
                    arr[i]+=1;
                }
            }else if(i===arr.length-1){
                if(arr[arr.length-2]>1){
                    arr[arr.length-2] -=1;
                    arr[arr.length-1] += 1;
                }
            }else{
                if(arr[i-1]>1){
                    arr[i] += 1;
                    arr[i-1] -= 1;
                }else if(arr[i+1]>1){
                    arr[i] += 1;
                    arr[i+1] -= 1;
                }
            }
        }
    }
    return arr.filter((num)=>num>0).length
}