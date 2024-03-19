function solution(priorities, location) {
    let answer = 0;
    const queue = priorities.map((priority, index) => ({ priority, index })); // 우선순위와 인덱스를 가진 객체로 이루어진 큐 생성

    while (queue.length > 0) {
        const currentProcess = queue.shift(); // 큐에서 첫 번째 프로세스를 꺼냄
        const higherPriorityExists = queue.some(process => process.priority > currentProcess.priority); // 큐에 현재 프로세스보다 높은 우선순위가 있는지 확인

        if (higherPriorityExists) {
            queue.push(currentProcess); // 더 높은 우선순위가 있다면 현재 프로세스를 큐의 맨 뒤로 보냄
        } else {
            answer++; // 현재 프로세스를 실행하므로 실행 횟수 증가
            if (currentProcess.index === location) break; // 원하는 위치의 프로세스인 경우 반복문 종료
        }
    }

    return answer;
}