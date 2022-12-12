// JS trata a las funciones con FCF (first class functions). Esto quiere decir que una funcion puede usarse como argumento, 
//se puede retornar desde otra funcion, etc. 

//Cuando pasamos una funcion como argumento a otra funcion, esa recibe el nombre de callback (el argumento).

//Ejemplo:

function decirHola(user) {
    return 'Hola ' + user
}

function decirChau(user) {
    return 'Chau ' + user
}

function crearSaludo (user, cb) {
    return cb(user) //retorno una f(usuario) basicamente
}

console.log(crearSaludo('Agustin', decirChau)) //chau agustin!

// CrearSaludo('Agustin', decirChau()) //Si a la funcion la pasas invocada
//DecirChau() se convierte en 'chau undefined' y chau no es una funcion
// por lo que no puede ser invocada en crearSaludo!

//como nos sirven lo callbacks (cb) con las matrices? 
// en principio para forEach() --> Realiza una funcion a cada elemento de un array!

var numeros = [ 2, 1, 44, 11, 92]

numeros.forEach(function callback(elemento,i) { //el function del for each tiene 3 argumentos function callback (elemento actual matriz, indice, matriz completa)
    if(elemento===i){
        console.log(elemento + i )
    }
    console.log(elemento)
    }
)

//Otra funcion parecida al forEach es el Map()
//ForEach no retorna nada, simplemente aplica pasos pero no devuelve, el Map si retorna!
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var numerosX2 = numeros.map(function callback(elementoActualMatriz){ //aca lo que hacemos es, a la matriz "numeros", le vamos a aplicar una operacion y la vamos a mandar a una nueva.
    return elementoActualMatriz*2 //el return es necesario ya que deposita cada operacion dentro de la nueva matriz.
}
)

console.log(numerosX2) // [ 4, 2, 88, 22, 184 ]

// REDUCE:

// El método reduce() ejecuta una función reductora sobre cada elemento 
//de un array, devolviendo como resultado un único valor.

//La funcion reductora recibe 4 elementos, un acumulador, el valor actual, indice actual y el array completo.

//para sumar todos los numeros de una matriz, podriamos iterar o usar reduce:

var sumaNumeros = numeros.reduce(function callback(acumulador, elemento) {
    return acumulador + elemento
},0) //el cero va por fuera del callback, porque es el valor a partir del que
//la funcion callback empezara a sumar, no es parte de la misma. 

// o tambien:

var accumulator = 0

var sumaNumeros = numeros.reduce(function callback(acumulador, elemento) {
    return acumulador + elemento
},accumulator)


