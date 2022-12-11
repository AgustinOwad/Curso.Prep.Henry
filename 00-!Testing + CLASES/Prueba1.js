function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  producto.calcularPrecioDescuento = function calcularPrecioDescuento() {
    var precioDescuento = this.precio * (1 - this.porcentajeDeDescuento)
    return precioDescuento
  }
  return producto
}

var objeto = {
  a : 2,
  b : 3,
  f : function(){console.log('Funcion')},
  numeroMisterioso : 2,
}

var Usuario = {
  nombre : 'Agustin',
  email : 'ing.owad@gmail.com',
  password : 'Agustin22',
  amigos : ['toni', 'peter'],
  esPremium : false,
  posts : [{postid:'001',likes:35},{postid:'002',likes:32},{postid:'003',likes:19}]
}

var Usuario1 = {
  nombre : 'Agustin',
  email : 'ing.owad@gmail.com',
  password : 'Agustin22',
  amigos : ['toni', 'peter'],
  esPremium : false
}

var   Usuario2 = {
  nombre : 'Juan',
  email : 'ing.juan@gmail.com',
  password : 'Juan22',
  amigos : ['Isabel', 'Licha'],
  esPremium : false
}

var producto = {
  precio : 140,
  porcentajeDeDescuento : 0.1, 
  DescuentoNativo : function(){
    var precioDescuento = this.precio * this.porcentajeDeDescuento
    return precioDescuento
  }
}


var usuarios = [Usuario1, Usuario2]

console.log(agregarMetodoCalculoDescuento(producto))