function solution(sizes) {
    let maxWidth;
    let maxHeight;
    let width = [];
    let height = [];
    sizes.forEach((arr, i)=>{
        width.push(arr[0]);
        height.push(arr[1])
    })
    
    maxWidth = Math.max(...width)
    maxHeight = Math.max(...height)
   
    if(maxWidth > maxHeight){
        for(let i=0; i<width.length;i++){
            if(width[i] < height[i]){
                let temp = width[i];
                width[i] = height[i];
                height[i] = temp;
            }
        }
        return maxWidth* Math.max(...height)
    }else{
        for(let i=0; i<width.length;i++){
            if(height[i] < width[i]){
                let temp = width[i];
                width[i] = height[i];
                height[i] = temp;
            }
        }
        return maxHeight* Math.max(...width)
    }
}

// 10 7
// 12 3
// 8 15
// 14 7
// 5 15

// 14 4
// 19 6
// 6 16
// 18 7
// 7 11
