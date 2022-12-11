//Nosotros tenemos objetos:

var Pedro = {
    nombre : 'Pedro',
    apellido : 'Suarez',
    edad : 28, 
    hobby : 'tenis',
    saludar : function () {
        console.log ('Hola '+ this.nombre) //esta linea es el cambio!
    }
}

var Agustin = {
    nombre : 'Agustin',
    apellido : 'Owad',
    edad : 24, 
    hobby : 'futbol',
    saludar : function () {
        console.log ('Hola, Agustin')
    }
}

//Estos objetos comparten cosas en comun, los atributos/propiedades.
// Aqui es donde entran a tener utilidad las clases!
// las clases son plantillas para la creacion objetos segun un modelo
// predefinido. Se utilizan para representar entidades/conceptos.

//Ej. Clase: Auto ; Objetos: Audi A5, Vw GOLF, etc.

// los objetos anteriores (agustin y pedro), son objetos literales.
// ahora necesitamos function constructors y new.

//Functrion constructor (es la clase) : 

function Persona() { //toda funcion constructor arranca con Mayusc.
    this.firstName = 'Juan';
    this.lastName = 'Perez';
}

var juan = new Persona(); //instanciamos una persona.

console.log(juan) // Persona { firstName: 'Juan', lastName: 'Perez' } (trae el nombre de la constructora)

// Como lo hacemos generico?

function Persona(nombre, apellido) { 
    this.firstName = nombre;
    this.lastName = apellido;
}

var peter = new Persona('Peter', 'Alfonso')
console.log(peter)

//Que hace "new"?

/*

Primero crea un objeto vacio :

    var objetoVacio = {}; 

Despues genera un bind en funcion de como usemos la constructora. 
Bind basicamente hace que el This de la funcion Persona sea
el objetoVacio.

    Persona('Peter', 'Alfonso').bind(objetoVacio)

Y por ultimo, retorna el objeto: 

    return objeto; (por eso la funcion contructora no tiene return)

*/

//Veamos ahora el Default Operator (or dentro de la asignacion):

function Persona(nombre, apellido) { 
    this.firstName = nombre || 'Juan';
    this.lastName = apellido || 'Perez';
}

var jPerez = new Persona()
console.log(jPerez)

//Para que otra cosa es util los operadores de tipo tabla de verdad?
//Para saber si una persona existe o no!

var roberto;

console.log(roberto&&roberto.edad) //el resultado es Undefined!

//Como se interpreta "roberto&&roberto.edad"? 
// Si existe el objeto Roberto , quiero ver que hay en Roberto.edad

// Ahora, que pasa si esta definido el objeto 'Toni' y hacemos la misma prueba

var toni = {}

console.log(toni) // {}
console.log(toni.edad) //Undefined
console.log(toni&&toni.edad) //Undefined


// PROTOTYPE!

// Todos los objetos de Js tienen una referencia a otro, llamado prototipo.
// El prototipo de peter, es Persona!

//cada objeto tiene sus propiedades, pero a su vez, este esta ligado
// a un prototipo. Entonces, si busco una propiedad que no esta en
//el objeto, JS la va a buscar en el prototipo.

// por eso puedo hacer esto:

var lista = [1, 2, 3]
lista.push(42)

// el metodo Push no esta definido en var lista= [1,2,3]. Esta definido
// en el prototipo "array" generico. Es decir, lista tiene ciertas
// propiedades predefinidas en el prototipo "array" de JS.

//entonces, para que nos sirven las constructoras?
//Nos sirven porque son el prototype de lo que vayamos creando y
//Nos sirve para compartir funciones.

//Recordemos la funcion constructora Persona():

/*
function Persona(nombre, apellido) { 
    this.firstName = nombre || 'Juan';
    this.lastName = apellido || 'Perez';
}
*/

//Si queremos que esta funcion tenga una propiedad inherente, es decir
//no declarada en las lineas de codigo de la constructora,
//podemos prototiparle una funcion:

Persona.prototype.saludar = function() { //Se lee: Para Persona, prototipar la funcion Saludar.
    console.log ( 'Hola! Soy ' + this.firstName + ' ' + this.lastName)
}

//Ahora, podemos invocar una nueva persona:

var Alicia = new Persona('Alicia', 'Silva') //no contiene a f(saludar)

Alicia.saludar() // "Hola soy Alicia Silva"

//Que hizo el New ahora entonces?

// Creo un objeto vacio --> Var objVacio = {}
// Lo bindeo a Persona y le asigno Alicia y silva (y lo retorno) --> Return Persona(alicia,silva).bind(objNuevo)

// Vinculo a Persona con su prototipo de saludar!! --< objNuevo.__proto__ = Persona.prototype

// OBJECT.CREATE y PURE PROTOTYPAL INHERITANCE
// son 2 formas de hacer lo mismo que ya vimos!

//object create usa el objeto alfa de javascript!

var Automovil = {
    color : 'defecto', //se tiene que poner defecto porque no hay This aca por utilizar Obj.Create
    marca : 'defecto',
    getPresentacion : function presentacion (){
        console.log ('Soy un ' + this.marca +' color '+ this.color)
    }
}

var vwAzul = Object.create(Automovil) //creamos un vwAzul que esta vacio porque no le dimos parametros
//Output : {} (porque esta sacando las cosas de su prototipo en realidad)

console.log (vwAzul) //{} 
console.log (vwAzul.__proto__) //{ color: 'defecto', marca: 'defecto',  getPresentacion: [Function: presentacion]}

// en sintesis, con object.create, generamos un objeto vacio (vwAzul en este caso)
// y mediante asignaciones lo vams completando. Esta vacio porque en realidad,
// no le dimos parametros a VW y esta yendo a buscar lo que encuentra a su prototipo (herencia y jeraraquia)

vwAzul.color = 'Azul'
vwAzul.marca = 'Volkswagen'
console.log (vwAzul) // { color: 'Azul', marca: 'Volkswagen' } (ahora si tiene datos)
console.log (vwAzul.getPresentacion()) // Soy un Volkswagen color Azul

// la ultima forma de hacer las cosas es con el comando Class (Muy similar a python)
// primero definimos el constructor y luego los metodos!

class Perro{
    constructor(raza, nombre, edad) {
        this.nombre = nombre,
        this.raza = raza
        this.edad  = edad
    } //hasta aca llegan las propiedades, siguen los metodos

    getSaludo () {
        return 'Hola! Soy ' + this.nombre + '. Un ' + this.raza + ' de ' + this.edad + ' años de edad!'
    }

    getAñosPerrunos () {
        var edadPerruna = this.edad * 7
        if(edadPerruna >50) {
            return 'En edad perruna, tengo ' + edadPerruna + ' años! ¿Que viejo no?'
        }
        return 'En edad perruna, tengo ' + edadPerruna + ' años! Estoy hecho un pibe!'
    }
}

var ziro = new Perro('Boxer', 'Ziro', 12)

console.log (ziro)
console.log (ziro.getSaludo())
console.log (ziro.getAñosPerrunos())

//Tambien, algo muy parecido a POO, es una clase heredando de otra!
//los perros son mascotas... (primero son perro, despues mascota)

class Mascota extends Perro { 
    constructor (raza, nombre, edad, dueño, animal){
        super(raza, nombre, edad) //trae de la jerarquia superior estas 3 variables (de Perro)
        this.dueño = dueño
        this.animal = animal
    }

    getDueño() {
        return 'Mi nombre es '+ this.nombre +  ' y mi dueño es ' + this.dueño //aca las variables upper ya se llaman con un This!
    }
}

var Bruce = new Mascota('Boxer','Bruce', 7, 'Caro', 'Perro')

console.log(Bruce)

console.log(Bruce.getDueño()) // Mi nombre es Bruce y mi dueño es Caro

// RESUMEN! Formas de crear clases + metodos: 

// 1, constructor convencional + prototype:

function Persona(nombre, apellido) { 
    this.firstName = nombre || 'Juan';
    this.lastName = apellido || 'Perez';
}

Persona.prototype.saludar = function() { //Se lee: Para Persona, prototipar la funcion Saludar.
    console.log ( 'Hola! Soy ' + this.firstName + ' ' + this.lastName)
}

//2. Con Create + asignacion de propiedades luego: 

var Automovil = {
    color : 'defecto', //se tiene que poner defecto porque no hay This aca por utilizar Obj.Create
    marca : 'defecto',
    getPresentacion : function presentacion (){
        console.log ('Soy un ' + this.marca +' color '+ this.color)
    }
}
var vwAzul = Object.create(Automovil) //Con lo de arriba creo la clase y con esto el objeto vwAzul

vwAzul.color = 'Azul'
vwAzul.marca = 'Volkswagen'

//con class {constructor{} f()}

class Perro{
    constructor(raza, nombre, edad) {
        this.nombre = nombre,
        this.raza = raza
        this.edad  = edad
    } //hasta aca llegan las propiedades, siguen los metodos

    getSaludo () {
        return 'Hola! Soy ' + this.nombre + '. Un ' + this.raza + ' de ' + this.edad + ' años de edad!'
    }

    getAñosPerrunos () {
        var edadPerruna = this.edad * 7
        if(edadPerruna >50) {
            return 'En edad perruna, tengo ' + edadPerruna + ' años! ¿Que viejo no?'
        }
        return 'En edad perruna, tengo ' + edadPerruna + ' años! Estoy hecho un pibe!'
    }
}

var ziro = new Perro('Boxer', 'Ziro', 12)