function solution(number, k) {
    let stack = [];
    for (let i = 0; i < number.length; i++) {
        let num = number[i];
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
            stack.pop();
            k--;
        }
        stack.push(num);
    }

    // k가 아직 남아있다면 스택에서 제거
    if (k > 0) {
        stack = stack.slice(0, stack.length - k);
    }

    return stack.join('');
}