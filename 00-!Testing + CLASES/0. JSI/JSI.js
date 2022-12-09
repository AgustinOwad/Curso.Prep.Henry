var firstName = 'Agustin';
let lastName = 'Owad'; // Necesito definirla antes de utilizarla porque si no tira error
const PI = 3.1416; //Esta variable no se puede "pisar o reasignarle valor"

//CASTEO DE DATOS: Js se toma la libertad de cambiar el tipo de dato para resolver lo que el usuario pide:

a= "1"
b=2

console.log(a+b) //--> Esto daria "12" (string), es decir, castea la variable B para resolver el concat

console.log(typeof(a+b))


// FUNCIONES!

var nombre = 'Agustin Owad';
var edad = 24; 

function NombreSaludo(nombre, edad) {
    console.log ('Hola mi nombre es ' + nombre)
    console.log ('Tengo ' + edad + ' años!')
}

NombreSaludo('Juan Perez', 22) // Calling function

// NombreSaludo(nombre,edad) //NOANDA --> Calling function, entran las 2 variables definidas anteriormente por scope

console.log(Math.max(1,2,4,56,1,3,5))



