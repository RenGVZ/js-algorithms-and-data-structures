// Big O of Objects (objects are inherently unordered)
// Insertion - 0(1)
// Removal - 0(1)
// Searching - 0(n)
// Access - 0(1)

// Big O of object methods
// Object.keys - O(n)
// Objects.values - O(n)
// Object.entries - O(n)
// hasOwnProperty - O(1)

// Big O of Arrays (ordered lists)
// Insertion - it depends
// Removal - it depends
// Searching - O(n)
// Access - O(1)

// Big O of array methods
// push - O(1)
// pop - O(1)
// shift - O(n)
// unshift - O(n)
// concat - O(n)
// slice - O(n)
// splice - O(n)
// sort - O(n * log n)
// forEach/map/reduce/filter/etc - O(n)

const charCount = (str) => {
  // make object to store results
  let results = {}
  for (let i = 0; i < str.length; i++) {
    // loop over str and find out if the object contains the char
    let char = str[i].toLowerCase();
    if(/[a-z0-9]/.test(char)) {
      if (results[char] > 0) {
        results[char]++
      }
      else {
        results[char] = 1
      }
    }
  }
  // return the result object
  return results
}

// console.log(charCount('Hello hi7'));

const charCountRefactored = (str) => {
  let results = {}
  for (char of str) {
    char = char.toLowerCase();
    if (/[a-z]/.test(char)) {
      results[char] = ++results[char] || 1;
    }
  }
  return results;
}

console.log(charCountRefactored('Hello hi 1'));