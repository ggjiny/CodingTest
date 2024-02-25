function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const day = ['FRI', 'SAT', 'SUN','MON','TUE','WED','THU'];
    let sum = 0;
    for(let i=0; i< a-1;i++){
        sum += month[i];
    }
    sum += b;
    return (sum%7)-1 < 0 ? day[day.length-1] : day[(sum%7)-1]
}