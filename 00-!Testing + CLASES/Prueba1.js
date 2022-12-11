function empiezaConNueve(n) {
  absoluto = Math.pow(n**2, 0.5)
  largoNumero = absoluto.toString().length
  numero = absoluto / Math.pow(10, largoNumero-1)

  if(numero % 9 < 1 && numero !=0){
    return true
  } 
  return false

}

array = []

for (i=-100; i< 190; i++) {
  if(empiezaConNueve(i) ===true){
      matrix = []
      matrix.push(i)
      matrix.push(empiezaConNueve(i))
      array.push(matrix)
  }
}

console.log(array)