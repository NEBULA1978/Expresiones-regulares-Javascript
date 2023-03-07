// Para verificar si una cadena de texto contiene una palabra específica, puedes utilizar el método test() de una expresión regular.Por ejemplo:

const cadena = "Hola mundo";
const expresionRegular = /mundo/;
const resultado = expresionRegular.test(cadena);
console.log(resultado); // Devuelve true, ya que "mundo" está en la cadena de texto


// Para encontrar todas las ocurrencias de una palabra específica en una cadena de texto, puedes utilizar el método match() de una expresión regular.Por ejemplo:

const cadena2 = "El gato es negro y el perro es blanco";
const expresionRegular2 = /el/gi;
const resultado2 = cadena2.match(expresionRegular2);
console.log(resultado2); // Devuelve ["El", "el", "el"]

// Para reemplazar todas las ocurrencias de una palabra específica en una cadena de texto, puedes utilizar el método replace() de una expresión regular.Por ejemplo:

const cadena3 = "El gato es negro y el perro es blanco";
const expresionRegular3 = /el/gi;
const resultado3 = cadena3.replace(expresionRegular3, "la");
console.log(resultado3); // Devuelve "La gata es negra y la perra es blanca"


// Para dividir una cadena de texto en un array utilizando una expresión regular como separador, puedes utilizar el método split().Por ejemplo:

const cadena4 = "apple, banana, orange";
const expresionRegular4 = /\s*,\s*/;
const resultado4 = cadena4.split(expresionRegular4);
console.log(resultado4); // Devuelve ["apple", "banana", "orange"]

// Para validar un formato específico en una entrada de usuario, como una dirección de correo electrónico o un número de teléfono, puedes utilizar una expresión regular en conjunto con el método test().Por ejemplo:

const correoElectronico = "ejemplo@dominio.com";
const expresionRegular5 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const resultado5 = expresionRegular5.test(correoElectronico);
console.log(resultado5); // Devuelve true, ya que la dirección de correo electrónico 

// RESULTADO POR CONSOLA

// nexus @nexus-System: ~/Escritorio/Expresiones - regulares - Javascript$ node ejemplos.js
// true
// ['El', 'el']
// la gato es negro y la perro es blanco
// ['apple', 'banana', 'orange']
// true
// nexus @nexus-System: ~/Escritorio/Expresiones - regulares - Javascript$ 