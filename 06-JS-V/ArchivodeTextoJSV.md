Definicion
* `prototype`
Un prototype es una referencia que tienen todos los objetos. Es decir, todos los objetos tienen una referencia a otro objeto, dicha referencia se denomina proto. Es muy util cuando queremos ahorrar espacio de nuestro equipo debido a que crear multiples funciones resulta muy costoso y ocupa mucho espacio. Y gracias a que cada clase tiene una propiedad proto que nos permite asignar un metodo que responda a multiples entradas sin necesidad de volver a escribir la funcion cada vez que vallamos a ingresar un dato.

* _Constructors_ (de Clases)
Este lo que hace es entregar un contenedor de objetos del valor dado. Entonces si:
el valor dado es null o undefined creara y devolvera un objeto vacio; si se le entrega un objeto devolvera su valor; de lo contrario devolvera un objeto de tipo con el valor que fue dado.
Todos los objetos tienen una propiedad constructor 