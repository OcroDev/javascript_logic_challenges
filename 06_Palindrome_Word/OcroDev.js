
function solution(inputString) {
 let stringSplit = inputString.split('');
 let stringReverse = stringSplit.reverse();
 let inputInverse = stringReverse.join('')
 
 return inputString === inputInverse ? true : false
 
}

console.log(solution("aabaa")) // true
console.log(solution("abac")) // false
console.log(solution("a")) // true