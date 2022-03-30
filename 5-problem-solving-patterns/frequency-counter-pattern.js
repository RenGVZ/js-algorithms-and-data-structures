const sameNaive = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1);
  }
  return true
}

// console.log(same([1, 2, 3], [4, 1, 9]));

const sameImproved = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

// console.log(sameImproved([2, 3, 3], [4, 9, 9]));

const anagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }
  let letterFrequency1 = {};
  let letterFrequency2 = {};
  for (let val of word1) {
    letterFrequency1[val] = (letterFrequency1[val] || 0) + 1;
  }
  for (let val of word2) {
    letterFrequency2[val] = (letterFrequency2[val] || 0) + 1;
  }
  console.log(letterFrequency1);
  console.log(letterFrequency2);
  for (let key in letterFrequency1) {
    if (!(key in letterFrequency2)) {
      return false;
    }
  }
  return true;
}

// console.log(anagram('anagram', 'raganam'));

const anagramColt = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }
  let lookup = {};
  for (let i = 0; i < word1.length; i++) {
    let letter = word1[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup);
  for (let i = 0; i < word2.length; i++) {
    let letter = word2[i]
    if (!(lookup[letter])) {
      return false;
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}

console.log(anagramColt('anagram', 'raganam'));