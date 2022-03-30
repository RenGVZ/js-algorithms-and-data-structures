// return largest sum of n consecutive numbers
const naiveMaxSubarraySum = (arr, n) => {
  if (arr.length < n) {
    return null
  }
  let max = -Infinity
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    console.log('i- outer: ', arr[i]);
    for (let j = 0; j < n; j++) {
      console.log('i:', arr[i], 'j', arr[j]);
      temp += arr[i + j];
      console.log('temp: ', temp);
      if (temp > max) {
        max = temp
      }
    }
    // console.log(temp, max);
  }
  console.log(max);
  return max
}
//                                     i
// naiveMaxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}
//                             i
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)