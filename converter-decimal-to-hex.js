function decimalToHex(r,g,b) {
  let color = []
  try {
      color = Array.from(arguments).map((part, index) => {
        const converted = validate(part)
        if (converted) {
          return converted
        } else {
          throw(`Field at index ${index} has error.`)
        }
      })    
    }
  catch (error) {
    console.log(error)
  }

  console.log( `color: #${color.join('')}`)
}
 
//decimal to hex
function convertNumber(number) {
	let hexString = number.toString(16)
	number = parseInt(hexString, 16)
	return hexString
}

function validate(number) {
  if(number >=0 && number <=255) {
    if(number.toString().length === 1) {
      return number = "0" + number
    }
    else if(number.toString().length === 2 || number.toString().length === 3) {
        return convertNumber(number)
    }
  }
  
  return null
}

decimalToHex(3,5,200)
