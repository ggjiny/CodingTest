function solution(s) {
    return (s.length === 6 || s.length === 4) && (/^\d+$/g).test(s) ? true: false;
}