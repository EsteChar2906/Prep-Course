// No cambies los nombres de las funciones.

function crearUsuario() {
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }
  Usuario.prototype.saludar = function(){
    return "Hola, mi nombre es " + this.nombre;
  };
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  Constructor.prototype.saludar = function() {
    return "Hello World!";
  };
}

function agregarStringInvertida() {
  String.prototype.reverse = function() {
    var StringInvertida = "";
    for (i = this.length - 1; i >= 0; i--) {
      StringInvertida = StringInvertida + this.charAt(i);
    }
    return StringInvertida;
  };
}

// ---------------------------------------------------------------------------//
  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio,
      this.detalle = function() {
        return {
          nombre: this.nombre,
          apellido: this.apellido,
          edad: this.edad,
          domicilio: this.domicilio,
        }
      }
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  var Juan = new Persona(nombre, apellido, edad, dir);
  return Juan;
}
  
function agregarMetodo() {
  Persona.prototype.datos = function() {
    return this.nombre + ", " + this.edad + " años"
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
