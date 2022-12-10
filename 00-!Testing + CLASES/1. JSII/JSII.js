function dibu(numerazo) {

    if (!(numerazo)==false) {
       return 'El dibu martinez'
    }
    return 'Holanda cagon'
}

var numero = 24

// console.log(dibu(numero))

 // ciclos FOR

 for (
    var i = 0; // 1° Se define la variable que se va a ir incrementando (pasos)
    i <=100; //2° Definimos hasta cuando va a incrementar
    i++ // Definimos el paso --> De a 1 unidad en este caso.
) {
    //Bloque de codigo.
}

//EJEMPLO: Imprimir los numeros impares del 1 al 100. 

/*
for (var i = 1; i<=100; i = i+2) {

    if(i<50) {
        console.log('The number is ' + i)
    }

    if (i%2 !== 0 ) { 
        console.log('tetas')
    }
}

for (var i = 1; i<=100; i++) {
    if (i%2 ===0){
        console.log(i)
    }

    if(i>30){
        for(var j=0; j<10;j++) {
            console.log ('new coount: '+j)
        }
        return;
    }
}
¨
*/

// esto mismo pudimos haberlo hecho con un while!

i = 0

while (i<100) {
    if (i%2 ===0){
        console.log(i)
    }

    if(i>30){
        for(var j=0; j<10;j++) {
            console.log ('new coount: '+j)
        }
        return;
    }
    i++
}
