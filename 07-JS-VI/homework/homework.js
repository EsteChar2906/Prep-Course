// Do not change any of the function names

function mayuscula(nombre) {
  return nombre[0].toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  var Suma = numeros.reduce(function(acumulador, elemento) {
    return acumulador + elemento;
  }, 0);
  cb(Suma);
}

function forEach(array, cb) {
  for (i=0; i < array.length; i++) {
    cb(array[i]);
  }
}

function map(array, cb) {
  var ArrayNeo = array.map(function(x) {
    return cb(x);
  });
  return ArrayNeo;
}

function filter(array) {
  var ArrayInicialA = [];
  for (i = 0; i < array.length; i++) {
    if (array[i][0] === "a") {
      ArrayInicialA.push(array[i]);
    }
  }
  return ArrayInicialA;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
