// Given a sorted array of integers, write a function that is given a
// number and returns the index where that number is located in the array

const search = (arr, val) => {
  let min = 0
  let max = arr.length - 1
  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    if (arr[middle] < val) {
      min = middle + 1
    } else if (arr[middle] > val) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

console.log(search([1,2,3,4,5,6,7,8,9,10], 3))

const naiveSearch = (array, num) => {
  let position = null
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i
    }
  }
  return -1;
}

// console.log(search([1,2,3,4,5,6], 6))