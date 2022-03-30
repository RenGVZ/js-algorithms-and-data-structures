// create a function to count the unique values in an array. The array is already sorted.

const countUniqueValues = (array) => {
  if (array.length === 0) {
    return 0
  }
  let i = 0
  for (let j = 1; j < array.length; j++) {
    if(array[i] !== array[j]) {
      console.log(`array[i] ${i}: ${array[i]}, !== array[j] ${j}: ${array[j]}`);
      i++
      array[i] = array[j]
    }
  }
  console.log(i + 1);
  return i + 1
} 
//                      i  j
countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7])


// given a sorted array, find the first pair of numbers where the sum is 0 
// and return an array that includes both those values.
// If a pair does not exist, return undefined.

const improvedSolution = (array) => {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}
//         index   0   1   2   3  4  5  6  7  8
// improvedSolution([-4, -3, -2, -1, 0, 1, 2, 3, 10])

const naiveSolution = (array) => {
  for (let i = 0; i < array.length; i++) {
    let outerVal = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let innerVal = array[j];
      if (outerVal + innerVal === 0) {
        return [outerVal, innerVal];
      }
    }
  }
}

// naiveSolution([-3, -2, -1, 0, 1, 2, 3])