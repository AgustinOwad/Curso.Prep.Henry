function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  let arrayNuevo = []

  for ( i = 0  ; i< array.length ; i++) {
    arrayNuevo.push(cb(array[i]))
  }

  return arrayNuevo
}

function x2 (numero) {
  return numero**2
}

var matriz = [1, 2, 3, 4, 5]
var palabras = ['agus', 'pancitos', 'ali', 'termo', 'aliexpress', 'ala']


console.log(map(matriz,x2))