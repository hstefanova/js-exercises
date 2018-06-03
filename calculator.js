// Calculator Plus
// Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters

function calculatorPlus(operation, ...arguments){
	let numbers = Array.from(arguments).sort((a,b) => b-a)

	switch(operation) {
		case "sum":
			return console.log(`The sum is: ${sum(numbers)}`) || sum(numbers)
			break

		case "average":
			return console.log(`The average sum is: ${average(numbers)}`) || average(numbers)
			break

		case "substraction":
			const substrResult = substr(numbers[0], numbers.slice(1))
			return console.log(`The substraction is: ${substrResult}`) || substrResult
			break

		case "division": 
			const divisionResult = division(numbers[0], numbers.slice(1))
			return console.log(`The division is: ${divisionResult}`) || divisionResult
			break

		default: console.log("No match operation")
	}
}

function sum(arr) {
  return arr.reduce((currentValue, nextValue) => currentValue + nextValue, 0)
}

function average(arr) {
	return sum(arr) / arr.length
}

function substr(first, arr) {
	console.log(first, arr)
	return first - arr.reduce((prev, curr) => prev + curr, 0)
}

function division(first, arr) {
	console.log(first, arr)
	return first / arr.reduce((prev, curr) => prev + curr, 0)
} 

calculatorPlus("average", 29.76, 41.85, 46.5)
calculatorPlus("sum", 31.5, 41.85, 46.5)
calculatorPlus("substraction", 20,30,70)
calculatorPlus("division", 20,30,70)

