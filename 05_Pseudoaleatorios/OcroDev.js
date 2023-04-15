let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
let miliseconds = now.getMilliseconds();

let seed = `${hour}${minute}${second}`;

let seedSplit = seed.split('');
let seedReverse = seedSplit.reverse();
let seedJoin = seedReverse.join('');

let totalSeed = parseFloat((seedJoin + seed) / (seed * miliseconds + seedJoin));

totalSeed = totalSeed.toString();

let randomNumber = '';
for (let i = 2; i > 0; i--) {
  randomNumber += totalSeed[totalSeed.length - i];
}

console.log('{ Random Number: ' + parseInt(randomNumber) + ' }');
