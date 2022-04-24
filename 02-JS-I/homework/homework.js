// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "EsteChar";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2906;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  var provista = str;
  return provista;
}

function suma(x, y) {
  var Adicion = x + y;
  return Adicion;
}

function resta(x, y) {
  var Sustraer = x - y;
  return Sustraer;
}

function multiplica(x, y) {
  var Producto = x * y;
  return Producto;
}

function divide(x, y) {
  var Residuo = x / y;
  return Residuo;
}

function sonIguales(x, y) {
  if (x === y) {
    return true;
  }
  return false;
}

function tienenMismaLongitud(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  return false;  
}

function menosQueNoventa(num) {
  if (num < 90) {
    return true;
  }
  return false;
}

function mayorQueCincuenta(num) {
  if (num > 50) {
    return true;
  }
  return false;
}

function obtenerResto(x, y) {
  var ModuloResto = x % y;
  return ModuloResto;
}

function esPar(num) {
  if (num%2==0) {
    return true;
  }
  return false;
}

function esImpar(num) {
  if (num%2==1) {
    return true;
  }
  return false;
}

function elevarAlCuadrado(num) {
  var Alcuadrado = num ** 2;
  return Alcuadrado;
}

function elevarAlCubo(num) {
    var Alcubo = num ** 3;
    return Alcubo;
}

function elevar(num, exponent) {
  var elevarExpo = num ** exponent;
  return elevarExpo;
}

function redondearNumero(num) {
  var Redondeando = Math.round(num);
  return Redondeando;
}

function redondearHaciaArriba(num) {
  var RedondeandoUp = Math.ceil(num);
  return RedondeandoUp;
}

function numeroRandom() {
  var NumeroAzar = Math.random();
  return NumeroAzar;
}

function esPositivo(numero) {
  if (numero > 0) {
    return "Es Positivo"
  }
  else if (numero < 0) {
    return "Es Negativo"
  }
  else {(numero === 0)
    return false
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var NombreCompleto = nombre + apellido;
  return NombreCompleto;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
