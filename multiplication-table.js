// Write a function that writes in the console the multiplication table (from 1 to 10)

function multiplicationTable() {
  let table=[]
  for(let i=1; i<=10;i++) {
    table.push(i)
    for(let j=2; j<=10;j++) {
      table.push(i*j)  
    }
    console.log(table)
  }
}

// multiplicationTable()
//ES6
function multiTable() {
  let columns =[1,2,3,4,5,6,7,8,9,10]
  return columns.map(column => { 
     return columns.map(_column => {
       return column * _column
     })
   })
}

multiTable().map(row=>{console.log(row)})