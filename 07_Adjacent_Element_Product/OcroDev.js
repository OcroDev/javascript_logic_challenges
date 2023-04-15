function solution(inputArray) {
  let largest = -1001;
  if (inputArray.length >= 2 && inputArray.length <= 10) {
    for (let i = 0; i < inputArray.length; i++) {
      let result = inputArray[i] * inputArray[i + 1];
      if (result > largest) {
        largest = result;
      }
    }
  } else {
    return console.error('wrong inputArray.length');
  }
  return largest;
}

console.log({ solution: solution([9, 5, 10, 2, 24, -1, -48]) });
console.log({ solution: solution([5, 6, -4, 2, 3, 2, -23]) });
console.log({ solution: solution([4, 1, 2, 3, 1, 5]) });
console.log({ solution: solution([-23, 4, -3, 8, -12]) });
console.log({ solution: solution([1, 0, 1, 0, 1000]) });
