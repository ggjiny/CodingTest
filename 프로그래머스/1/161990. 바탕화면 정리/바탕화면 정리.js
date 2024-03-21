function solution(wallpaper) {
    wallpaper = wallpaper.map((line)=>line.split(""))
   // console.log(wallpaper)
    let result = [];
    let x=[];
    let y=[];
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0;j<wallpaper[0].length;j++){
            if(!wallpaper[i].includes('#')) break;
            if(wallpaper[i][j] === '#') {
                x.push(i);
                y.push(j)
            }
        }
    }
    result = [Math.min(...x), Math.min(...y), Math.max(...x)+1, Math.max(...y)+1]
    return result
}