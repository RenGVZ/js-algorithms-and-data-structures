// const addUpTo = (n) => {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(addUpTo(10));

// const addUpTo = (n) => {
//   return n * (n + 1) / 2;
// }

// console.log(addUpTo(3));

// function logAtLeast(n) {
//   for (var i = 1; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }

// console.log(logAtLeast(2));
// O(n)

// const logAtMost = (n) => {
//   for (var i = 1; i <= Math.min(5, n); i++) {
//     console.log(i);
//   }
// }

// console.log(logAtMost(6));
// O(1)

// const addSum = (n) => {
//   let t1 = performance.now();
//   for(let i = 1; i <= n; i++){
//     console.log(i);
//   }
//   let t2 = performance.now();
//   console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
// }

// console.log(addSum(100))

// This is a O(n^2) solution using nested loops
const printPairs = (n) => {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < i; j++) {
      console.log(i, j)
    }
  }
}

console.log(printPairs(4))