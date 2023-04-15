function solution(statues) {
  return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
}

console.log({ statues: solution([6, 2, 3, 8]) });
console.log({ statues: solution([0, 3]) });
console.log({ statues: solution([5, 4, 6]) });
console.log({ statues: solution([6, 3]) });
console.log({ statues: solution([1]) });
