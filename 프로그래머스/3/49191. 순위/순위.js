function solution(n, results) {
    let answer = 0;
    const dp = new Array(n).fill().map(_=> new Array(n).fill(false));
    for(const res of results){
        dp[res[0]-1][res[1]-1] = true;
    }
    console.log(dp);
    
    // k는 경유 노드
    for(let k=0; k<n;k++){
        for(let i=0; i<n;i++){
            for(let j=0; j<n;j++){
                // 노드 i에서 경유지 k로 가는 경로와
                // 경유지 k에서 노드 j로 가는 경로가 있다면
                if(dp[i][k] && dp[k][j]){
                    dp[i][j]=true;
                }
            }
        }   
    }
    for(let i=0; i<n;i++){
        let count = 0;
        for(let j=0; j<n;j++){
            if(dp[i][j] || dp[j][i]) count++;
        }
        
       if(count===n-1) answer++;
    }
    return answer;
}