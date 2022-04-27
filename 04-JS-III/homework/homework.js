// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];
}


function devolverUltimoElemento(array) {
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  return array.length;
}


function incrementarPorUno(array) {
  var EnterosArray = [];
  for (var i = 0; i < array.length; i++) {
    EnterosArray [i] = array[i] + 1;
  }
  return EnterosArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
}



function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  return palabras.join(" ");
}


function arrayContiene(array, elemento) {
  if (array.includes(elemento)) {
    return true;
  }
  return false;
} 


function agregarNumeros(numeros) {
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  var resultados = 0;
  for (i = 0; i < resultadosTest.length; i++) {
    resultados = resultados + resultadosTest[i];
  }
  return resultados / resultadosTest.length
}


function numeroMasGrande(numeros) {
  var Numgrande = numeros[0];
  for ( var i = 0; i < numeros.length; i++) {
    if (numeros [i] > Numgrande) {
      Numgrande = numeros [i];
    }
  }
  return Numgrande;
}


function multiplicarArgumentos() {
  if (arguments.length < 1)
    return 0;
  var Argum = 1;
  for (var i = 0; i < arguments.length; i++) {
    Argum = Argum * arguments[i];
  }
  return Argum;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  if (arreglo.lenght > 18)
  return arreglo.length;
}


function diaDeLaSemana(numeroDeDia) {
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  }
  return "Es dia laboral";
} 


function empiezaConNueve(n) {
  let Nueve = n.toString();
  if (Nueve.charAt(0) === "9") {
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  for (var i = 0; i < arreglo.length - 1; i++) {
    if (arreglo[i] !== arreglo[i + 1]) {
      return false;
    }
  }
  return true;
} 


function mesesDelAño(array) {
  var EstaelMes = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      EstaelMes.push(array[i]);
    }
  }
  if (EstaelMes.length < 3) {
    return "No se encontraron los meses pedidos"
  }
  else { return EstaelMes;
  }
}


function mayorACien(array) {
  var Mayor = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      Mayor.push(array[i]);
    }
  }
  return Mayor;
}


function breakStatement(numero) {
  var arreglo = [];
  var cuenta = numero;
  for (i = 0; i < 10; i++) {
    cuenta = cuenta + 2;
    if (cuenta === i) 
    break;
    else { arreglo.push(cuenta); 
    }
  }
  if (i < 10) {
    return "Se interrumpio la ejecucion";
  }
  else {
    return arreglo;
  }
}


function continueStatement(numero) {
  var arregloCont = [];
  var cuentaCont = numero;
  for (i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    else {
      cuentaCont = cuentaCont + 2;
      arregloCont.push(cuentaCont);
    }
  }
  return arregloCont;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
