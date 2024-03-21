function solution(survey, choices) {
   let type = {R:0, T:0, C:0, F:0, J:0,M:0, A:0, N:0};
    let result =''
    for(let i=0; i<choices.length;i++){
        if(choices[i] > 4){
            type[survey[i][1]] += choices[i]-4
        }else if(choices[i] < 4){
            type[survey[i][0]] += 4-choices[i]
        }
    }
    result +=type['R'] >= type['T'] ? 'R':'T'
    result +=type['C'] >= type['F'] ? 'C':'F'
    result +=type['J'] >= type['M'] ? 'J':'M'
    result +=type['A'] >= type['N'] ? 'A':'N'
    return result
}