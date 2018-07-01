function hexToDecimal(hex) {
  let R, G, B = ""
  
  if (hex.startsWith("#")) { 
    //input: #231 
    //output: #223311
    if(hex.length === 4){ 
      hex = hex[0] + hex[1].repeat(2)+hex[2].repeat(2)+hex[3].repeat(2)
      console.log(convertNumber(hex))
    }

    //input: #23 
    //otput: #232323
    else if(hex.length === 3) {
      hex+=hex.substring(1).repeat(2);
      console.log(convertNumber(hex))
    }

    //input: #ff0000
    else if(hex.length === 7) {
      console.log(convertNumber(hex))
    }
    else console.log("This is not a hex number")
  }
  else console.log("It should start with #")
}

function convertNumber(number) {
  number = number.toLowerCase() 
  number = number.slice(1); //remove symbol #
  
  R = number.substring(0,2);
  G = number.substring(2,4);
  B = number.substring(4,6);

  R = parseInt(R[0], 16)*Math.pow(16,1) + parseInt(R[1], 16)*Math.pow(16,0)
  G = parseInt(G[0], 16)*Math.pow(16,1) + parseInt(G[1], 16)*Math.pow(16,0)
  B = parseInt(B[0], 16)*Math.pow(16,1) + parseInt(B[1], 16)*Math.pow(16,0)
  
  return `RGB(${R}, ${G}, ${B})`
}

hexToDecimal("#3aaf43")
hexToDecimal("#23")
hexToDecimal("#231")


