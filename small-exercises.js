function sum() {
  return Array.from(arguments).reduce((prev, next) => prev + next, 0)
}

function multiply() {
  return Array.from(arguments).reduce((prev, next) => prev * next, 1)
}

function reverseString(str) {
  return str.split("").reverse().join("")
}

function findLongestWord() {
  return Array.from(arguments).map(word => word = word.length).sort((prev, next) => next-prev)[0]  
}

function filterLongWords(words,i) {
  return words.filter( word => word.length > i)
}
//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object.
function charFreq(str) {
  let obj = {}
  for(letter of str) {
     console.log(letter)
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  console.log(obj)
}

//charFreq("abbaaaabbababababagfd")
// const arr = ["dissapointed", "update", "something", "remember", "unfortunately"]
// console.log(filterLongWords(arr,10))
//console.log(findLongestWord("dissapointed", "update", "something", "remember", "unfortunately"))
// console.log(reverseString("this is a test"))
// console.log(sum(3,4,5,6,6))
// console.log(multiply(3,3,3  ))