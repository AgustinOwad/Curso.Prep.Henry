// dentro de un array podemos tener funciones  e invocarlas!

array = [4,'holla', function(){console.log('I am a function')}]

console.log(array[2]) // esta te trae el objeto, por ende sale "funcion"
console.log(array[2]()) //esta te ejecuta a la funcion! 

array.length //--> te devuelve un entero, la cantidad de elementos que tiene la matriz. 

array[3] = 'Agregar un elemento'

console.log(array) // Output: [ 4, 'holla', [Function (anonymous)], 'Agregar un elemento' ]

array.pop() // Borra el ultimo elemento de la lista 

console.log(array) // output: [ 4, 'holla', [Function (anonymous)] ]

// a diferencia de push y pop, tenemos unshift y shift  que agregan/quitan elementos del final!

array.unshift('Hola') //Agrega un elemtno al principio

console.log(array) // OUTPUT:  [ 'Hola', 4, 'holla', [Function (anonymous)] ]

array.shift() //Agrega un elemento al final.

console.log(array) // OUTPUT: [ 4, 'holla', [Function (anonymous)] ]
