# Expresiones-regulares-Javascript
Coincidencias Básicas:

Para encontrar todas las ocurrencias de la letra "a" en una cadena de texto, puedes utilizar la expresión regular /a/g. Esto buscará todas las "a" en la cadena y la "g" al final indica que se busca en toda la cadena y no solo la primera ocurrencia.
Para encontrar todos los números en una cadena de texto, puedes utilizar la expresión regular /\d+/g. Esto buscará todos los dígitos de 0 a 9 en la cadena y el símbolo "+" al final indica que se buscan uno o más dígitos juntos.
Límites:

Para encontrar todas las palabras que comienzan con "h" en una cadena de texto, puedes utilizar la expresión regular /\bh\w*/g. Esto buscará todas las palabras que comienzan con "h" y se detendrá en el primer espacio, signo de puntuación, etc. que encuentre.
Para encontrar todas las palabras que terminan con "ión" en una cadena de texto, puedes utilizar la expresión regular /\w*ión\b/g. Esto buscará todas las palabras que terminen en "ión" y se detendrá en el primer espacio, signo de puntuación, etc. que encuentre.
Conjuntos de Caracteres:

Para encontrar todas las vocales en una cadena de texto, puedes utilizar la expresión regular /[aeiou]/g. Esto buscará todas las letras "a", "e", "i", "o" y "u" en la cadena.
Para encontrar todas las letras en una cadena de texto que no sean vocales, puedes utilizar la expresión regular /[^aeiou]/g. Esto buscará todas las letras que no sean "a", "e", "i", "o" o "u".
Grupos:

Para encontrar todas las palabras que contengan tanto "h" como "o" en una cadena de texto, puedes utilizar la expresión regular /\b(h\wo|\wo\wh)\b/g. Esto buscará todas las palabras que contengan "h" y "o" en cualquier orden y se detendrá en el primer espacio, signo de puntuación, etc. que encuentre.

