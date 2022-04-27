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
  if(num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }
  else if(num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  }
  else if(num1 > 0 && num1 > num2 && num1 > num3) {
    return "Número 1 es mayor y positivo";
  }
  else if(num3 > num1 && num3 > num2) {
    return num3 + 1;
  }
  else {
    return false;
  }
}

function esPrimo(numero) {
  if( numero < 2) 
  return false;
  if(numero === 2) 
  return true;
  for(var i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  }
  return true;
}

function esVerdadero(valor){
  if (valor === true) {
    return "Soy verdadero";
  } else {(valor === false)
    return "Soy falso";
  }
}

function tablaDelSeis(){ 
  let Tabladel6 = []
  for (let i = 0; i < 11; i++) {
    Tabladel6.push (6 * i)
  }
  return Tabladel6
}

function tieneTresDigitos(numero){
  if (numero > 99 && numero < 1000) {
    return true;
  }
  return false;
}



function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var Dw = numero;
  var i = 0;
  do {
    i = i + 1;
    Dw = Dw + 5;
  } 
  while(i < 8);
  return Dw;
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
