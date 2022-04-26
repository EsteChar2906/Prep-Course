// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
 if (x > y) {
   return x;
 } else if (x < y) {
   return y;
 } else {(x === y) 
  return (x || y);
 }
}

function mayoriaDeEdad(edad) {
  if (edad >= 18) {
    return "Allowed";
  } else {(edad < 18)
    return "Not allowed"
  }
}
  
function conection(status) {
  if (status === 1) {
    return "Online";
  } else if (status === 2) {
    return "Away";
  } else {(status !== 1 && status !== 2)
    return "Offline"
  }
}

function saludo(idioma) {
  if (idioma === "aleman") {
    return "Guten Tag!";
  } else if (idioma === "mandarin") {
    return "Ni Hao!";
  } else if (idioma === "ingles") {
    return "Hello!";
  } else {(idioma !== "aleman", "mandarin", "ingles" || idioma === undefined)
    return "Hola!";
  }
}

function colors(color) {
  switch (color) {
    case "blue":
      return "This is blue";
      break;
    case "red":
      return "This is red";
      break;
    case "green":
      return "This is green";
      break;
    case "orange":
      return "This is orange";
      break;
    case color:
      return "Color not found";
  }
}

function esDiezOCinco(numero) {
  if (numero === 10 || numero === 5) {
    return true;
  } else {(numero !== 10 || numero !== 5)
    return false
  }
}

function estaEnRango(numero) {
  if (numero < 50 && numero > 20) {
    return true;
  } else {(numero > 50 && numero < 20)
    return false;
  }
}

function esEntero(numero) {
  if (Math.floor(numero) === numero) {
    return true;
  } else {(Math.floor(numero) !== numero)
    return false;
  }
} 

function fizzBuzz(numero) {
  if (numero % 3 == 0 && numero % 5 == 0) {
    return "fizzbuzz";
  } else if (numero % 3 == 0) {
    return "fizz";
  } else if (numero % 5 == 0) {
    return "buzz";
  } else {(numero % 3 !== 0 && numero % 5 !== 0)
    return numero;  
  }
}

function operadoresLogicos(num1, num2, num3) {
  if (num1 > num2 && num1 > num3 && num1 >= 0) {
    return "Número 1 es mayor y positivo";
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  } else if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  } else {
    return false;
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
