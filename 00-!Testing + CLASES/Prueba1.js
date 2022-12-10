function esPrimo(numero) {
    var primo = true;

    if(numero<=1) {
        primo = false
        return primo
    }    
    else if(numero>1){

        for (var i = 2; i < numero; i++) {
            if(numero%i ===0){
                primo = false
                break
            }
        }
    return primo   
    }
  }
primesArray = []

for( var i = -100 ; i <100; i++) 
  if (esPrimo(i) === true){
    primesArray.push(i)
  }

qtyPrimos = primesArray.length

console.log(...primesArray)
console.log('Hay un total de '+ qtyPrimos+ ' numeros primos')

