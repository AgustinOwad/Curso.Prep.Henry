// en esta clase vamos a ver Objetos, Metodos, For In, This.

const { straightThroughStringTask } = require("simple-git/src/lib/tasks/task")

// OBJETOS: Son una coleccion de propiedades, siendo una propiedad una asoviacion entre una clave y un valor.

/*
var objeto = {
    propiedad1 : valor1,
    propiedad2 : valor2, 
    ...
    propiedadN : valorN,
}
*/

//Ejemplo: 

var Agustin = {
    nombre : 'Agustin',
    apellido : 'Owad',
    edad : 24, 
    hobby : 'futbol',
    saludar : function () {
        console.log ('Hola, Agustin')
    }
}

console.log(Agustin['apellido']) //Esto devuelve el apellido. 
console.log(Agustin.apellido) //Esto tambien devuelve el apellido

//Como eliminamos una propiedad? Se usa el keyword delete

delete Agustin.hobby //borramos la propiedad hobby!

//Keyword THIS!
//Si quisieramos saludar a Agustin, hariamos lo siguiente:

Agustin.saludar() 

//Sin embargo, si yo quiero cambiarle el nombre a Agustin por Agus
// la consola seguiria diciendo "Hola, Agustin". Corrijamos esto
// con otro objeto

var Pedro = {
    nombre : 'Pedro',
    apellido : 'Suarez',
    edad : 28, 
    hobby : 'tenis',
    saludar : function () {
        console.log ('Hola '+ this.nombre) //esta linea es el cambio!
    }
}

//lo que hicimos fue invocar el keyword THIS, que nos permite referenciar
// propiedades dentro del mismo objeto.

Pedro.nombre = 'Peter'

Pedro.saludar() //El output es Hola Peter!

//Otra opcion, es crear los metodos por fuera de los objetos y agregarlos
//al objeto en si.

function despedirse (){
    console.log ('Chau '+ this.nombre + "!!")
}

Pedro.despedirse = despedirse

Pedro.despedirse()
