class Usuario {
  constructor (usuario, nombre, email, password){
    this.usuario = usuario
    this.nombre = nombre
    this.email = email
    this.password = password
  }
  
  saludar (){ 
    return 'Hola, mi nombre es '+this.nombre
  }
}


var user = new Usuario('Js2', 'Juan', 'juan@gmail.com','Juan223')


console.log(user.usuario)