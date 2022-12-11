// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0]

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  var ultimoElemento= array.length - 1
  return array[ultimoElemento]

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length

}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (var i = 0; i<array.length; i++)
    array[i] = array[i] + 1
  
  return array

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento)

  return array

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento)

  return array

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  var str = ""
  var LargoArray= palabras.length
  var espacio = " "

  console.log(LargoArray) //2

  for (var i = 0; i<LargoArray; i++){
    if(i<(LargoArray-1)){
      str = str + (palabras[i] + espacio)
    }
    else {
      str = str + palabras[i]
    }
  }

  return str
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  var coincidencia = false

  for (var i = 0; i<array.length; i++) {
    if(array[i]===elemento){
      coincidencia=true
      break
    }
  }
  return coincidencia
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var resultado = 0

  for (var i = 0; i<numeros.length; i++) {

    resultado = resultado + numeros[i]

  }

  return resultado
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var resultadoSuma = 0
  var promedio = 0

  for (var i = 0; i<resultadosTest.length; i++) {
    resultadoSuma = resultadoSuma + resultadosTest[i]
  }

  promedio = resultadoSuma / resultadosTest.length

  return promedio

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var maximo = numeros[0]

  for (var i =1 ; i<numeros.length ; i++) {
    if(numeros[i]>maximo){
      maximo = numeros[i]
    }
  }

  return maximo
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  var product = 1

  if(arguments.length===0) {
    return 0
  } else if (arguments.length ===1){
    return arguments[0]
  } else {
    for ( var i = 0 ; i < arguments.length ; i++){
      product = product*arguments[i]
    }
  }
  return product
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  contador = 0

  for (var i = 0; i < arreglo.length ; i++)
    if(arreglo[i]>18){
      contador = contador + 1
    }
  return contador
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  if ( numeroDeDia === 1 || numeroDeDia === 7) {
    return 'Es fin de semana'
  } else if (numeroDeDia>1 && numeroDeDia<7) {
    return 'Es dia Laboral'
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  absoluto = Math.pow(n**2, 0.5)
  largoNumero = absoluto.toString().length
  numero = absoluto / Math.pow(10, largoNumero-1)

  if(numero % 9 < 1 && numero !=0){
    return true
  } 
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  var firstComponent = arreglo[0]
  var retorno = true

  for (var i = 0; i < arreglo.length ; i++) {
    if (firstComponent === arreglo[i]){
      retorno = true
    } else {
      retorno = false
      break
    }
  }
  return retorno
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var nuevoArray = []
  var matrizBuscada = ['Enero', 'Noviembre', 'Marzo']

  for (var i = 0; i<array.length ; i++){

    for(var j=0; j<matrizBuscada.length; j++){

      if(array[i]===matrizBuscada[j] && !nuevoArray.includes(matrizBuscada[j])){

        nuevoArray.push(array[i])
      } 
    }
  }

  if(nuevoArray.length===3){
    return nuevoArray
  } else {
    return 'No se encontraron los meses pedidos'
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let salida = []

  for (i = 0 ; i < array.length ; i++){
    if(array[i]>100){
      salida.push(array[i])
    }
  }
  return salida
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let array = []
  let numeroPush = numero

  for (i = 1; i <= 10 ; i++) {
    numeroPush = numeroPush+2
    array.push(numeroPush)

    if (i === numeroPush){
      break 
    }
  } 

  if(array.length===10 && array[9]!==10){
    return array
  } else {
    return 'Se interrumpió la ejecución'
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array = []
  let numeroPush = numero

  for (i = 1; i <= 10 ; i++) {
    if (i === 5){
      continue 
    }
    numeroPush = numeroPush+2
    array.push(numeroPush)
  } 
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
