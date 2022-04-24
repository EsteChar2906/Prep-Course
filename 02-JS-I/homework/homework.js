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
  var SigExclamacion = str + "!";
  return SigExclamacion;
}

function combinarNombres(nombre, apellido) {
  var NombreCompleto = nombre + " " + apellido;
  return NombreCompleto;
}

function obtenerSaludo(nombre) {
  var Saludo = "Hola " + nombre + "!";
  return Saludo;
}

function obtenerAreaRectangulo(alto, ancho) {
  var AreaRectangulo = alto * ancho;
  return AreaRectangulo;
}


function retornarPerimetro(lado){
  var PerimetroCuadrado = lado * 4;
  return PerimetroCuadrado;
}


function areaDelTriangulo(base, altura){
  var Triangulo= (base * altura) / 2;
  return Triangulo;
}


function deEuroAdolar(euro){
  var Divisa = euro * 1.20;
  return Divisa;
}


function esVocal(letra){
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    return "Es vocal";
  } else if (letra.lengt != 1) {
    return "Dato incorrecto";
  } else {(letra != "a", letra != "e", letra != "i", letra != "o", letra != "u")
    return "Dato incorrecto";
  }
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
