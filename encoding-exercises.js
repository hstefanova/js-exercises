
// encodeWord
// Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:

// 7 instead of T
// 4 instead of A
// 5 instead of S
// 0 instead of O
// Add a random number between 0 and 1000 every 7 characters

const replacebles = [
	{
		value: 't',
		replaceWith: '7'
	},
	{
		value: 'i',
		replaceWith: '1'
	},
	{
		value: 'a',
		replaceWith: '4'
	},
	{
		value: 's',
		replaceWith: '5'
	},
	{
		value: 'o',
		replaceWith: '0'
	}
]

function encodeWord(word) {
	return Array.from(word).map((letter,index) => {

		const replacedLetter = replaceLetter(letter)

		if(index > 0 && index % 7 === 0) { 
			return `${replacedLetter}[${randNumber(0, 1000)}]`
		}
		return replacedLetter
	}).join('')
}

//replace the match letters with the numbers
function replaceLetter(letter) {
	for(rep of replacebles) {
		if (rep.value === letter.toLowerCase()) {
			return rep.replaceWith
		}
	}
	return letter
}

function randNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(encodeWord("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, natus."))
