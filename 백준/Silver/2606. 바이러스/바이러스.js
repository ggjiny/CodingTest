const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const edges = input.slice(2).map(line => line.split(" ").map(Number));

const adjList = Array.from({ length: N + 1 }, () => []);

for (const [from, to] of edges) {
    adjList[from].push(to);
    adjList[to].push(from); // 무방향 그래프이므로 양쪽으로 간선 추가
}

const visited = new Array(N + 1).fill(false);
const queue = [1];
let count = 0;

while (queue.length) {
    const node = queue.shift();
    if (visited[node]) continue; //이미 방문한 노드인지 확인
    visited[node] = true;
    count++;

    for (const neighbor of adjList[node]) {
        if (!visited[neighbor]) {
            queue.push(neighbor);
        }
    }
}
// BFS 알고리즘. 방문한 노드의 수를 세는 것이 목적

console.log(count - 1); // 1번 컴퓨터는 제외해야 함