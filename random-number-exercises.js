// helpers
function generateRandomNumbers(count) {
  let arrNumbers = []
  
  for(let i=1; i<=count; i++) {
    arrNumbers.push(randomNumber())  
  }
  return arrNumbers
}

function randomNumber() {
  return Math.floor(Math.random() * 9999)
}

function generateRandomInRange(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
                     
//Randomizes three numbers in range (0.. 100) and prints the largest one.
function randomLargest() {  
  let numbers = generateRandomNumbers(3)
  let maxNumber = numbers.sort((prev,next)=> next-prev)[0]
  console.log(numbers)
  console.log(`max number is: ${maxNumber}`)
}

//Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.
function randomEven() { 
 let number = randomNumber()
 console.log(number)
  
 let evenNumbers = []  
 for(let i = 0; i <= number; i++) {
   if( i % 2 === 0) evenNumbers.push(i)
 }
  console.log(evenNumbers)
}

// Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40, print all the numbers down to the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)
function randomOdd() {
  let number = randomNumber()
  let arrNumbers = []
  if(number >=40) {
    for(let i = 40; i<= number; i++) {
      if(i % 2 !== 0) arrNumbers.push(i)
    }
    console.log(number)
    console.log(arrNumbers)
  } 
  else if(number <= 40) {
    for(let i=40; i>=number;i--) {
      arrNumbers.push(i)
    }
    console.log(number)
    console.log(arrNumbers)
  }
}

//Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. For instance, if the randomized number was 1049, program should print 14
function randomSum() {
  let number = generateRandomInRange(100000,999999)
  let arrDigits = [...`${number}`]
  let sum = 0
  
  console.log(`The random number is ${number}`)
  console.log(arrDigits)
  
  sum = sumDigits(arrDigits)
  return sum
}

// Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. For instance, if the randomized number was 1049, program should print 5
function sumDigits(arr) {
  return arr.reduce((currentValue, nextValue) => Number(currentValue) + Number(nextValue),0)
}

function randomOne() {
  let sum = [...`${randomSum()}`]
  return sumDigits(sum)
}

//Randomizes two ( test with more than 2 numbers) numbers and prints the smallest number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.
function smallestCommonDivider() {
  let numbers = generateRandomNumbers(2)
	console.log('Numbers: ', numbers) 

	for(let i=2; i<=9; i++) {
		const filtered = numbers.filter(number => number % i === 0)
		if (filtered.length === numbers.length) { //if all numbers are divided 
			return console.log(`The smallest common divider is ${i}` )
		}
	}
	console.log("no number is matched")
}

// Randomizes two numbers and prints their least common multiplication of them. For example, 6 and 9 has 18 multilication
function leastCommonNumber(first, second) {
	let a = []
	let b = []
	var currentMultiplier = 1

	while(currentMultiplier !== 0) {

		a.push(first * currentMultiplier)
		b.push(second * currentMultiplier)
		//check if there is common multiplication (the first march is the smallest)
		let number  = checkNumbers(a, b)
		if(number) {
			console.log(`The least common number is ${number}`)
			return
		}

		currentMultiplier++;
	}

}

function checkNumbers(a, b){
 	var c = a.filter((number) => {
 		// compare each number of array A with all numbers from array B
 		const result = b.filter((_number) => {
	 		if(_number === number) {
	 			return _number
	 		}
 		})

 		if(result.length === 1) { //return empty array if there is no match and array with one value if there is a match
 			return result[0]
 		}

 	})
 	console.log(c)

 	if (c.length === 1) {
 		return c[0]
 	} else {
 		return undefined
 	}
 	// console.log('output: ',c)
}


// MAP Explanation
function _map(array, callback) {
    let newArr = []
    for(let i = 0; i<array.length; i++) {
      // callback(array[i])
      newArr.push(callback(array[i]))     
    }
  
  return newArr
}
// console.log(_map([1,2,3,4,5]))
let arr = _map([1,2,3,4,5], (element) => {
  //console.log(element)
  return element
})
//console.log(arr)
// END Map Explanation

// take two numbers and prints the smallest number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.

const numbers = [6,9]
function smallestCommonDivider() {
	console.log('Numbers: ', numbers) //6,9

	for(let i=2; i<=9; i++) {
		const filtered = numbers.filter(number => number % i === 0)
		if (filtered.length === numbers.length) { //if all numbers are divided 
			return console.log(`The smallest common divider is ${i}` )
		}
	}
	console.log("no number is matched")
}

// Randomizes two numbers and prints their least common multiplication of them. For example, 6 and 9 has 18 multilication
function leastCommonNumber(first, second) {
	let a = []
	let b = []
	var currentMultiplier = 1

	while(currentMultiplier !== 0) {

		a.push(first * currentMultiplier)
		b.push(second * currentMultiplier)
		//check if there is common multiplication (the first march is the smallest)
		let number  = checkNumbers(a, b)
		if(number) {
			console.log(`The least common number is ${number}`)
			return
		}
		currentMultiplier++;
	}

}

function checkNumbers(a, b){
 	var c = a.filter((number) => {
 		// compare each number of array A with all numbers from array B
 		const result = b.filter((_number) => {
	 		if(_number === number) {
	 			return _number
	 		}
 		})

 		if(result.length === 1) { //return empty array if there is no match and array with one value if there is a match
 			return result[0]
 		}

 	})
 	console.log(c)

 	if (c.length === 1) {
 		return c[0]
 	} else {
 		return undefined
 	}
 	// console.log('output: ',c)
}

