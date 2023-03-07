// Copiar la última línea de un archivo a la tercera línea de otro archivo:

const fs = require("fs");

// Leer el archivo de origen
const archivoOrigen = fs.readFileSync("archivo1.txt", "utf8");

// Obtener la última línea del archivo de origen
const lineas = archivoOrigen.trim().split("\n");
const ultimaLinea = lineas[lineas.length - 1];

// Leer el archivo de destino
const archivoDestino = fs.readFileSync("archivo2.txt", "utf8");

// Insertar la última línea en la tercera línea del archivo de destino
const archivoActualizado = archivoDestino.replace(/^.*$/m, `$&\n$&\n${ultimaLinea}\n`);

// Escribir el archivo actualizado
fs.writeFileSync("archivo2.txt", archivoActualizado);


// En ambos ejemplos, se utiliza la función readFileSync() del módulo fs para leer el contenido de los archivos de origen y destino.Luego, se utiliza una expresión regular para obtener la línea deseada del archivo de origen, y otra expresión regular para insertar esa línea en la línea deseada del archivo de destino utilizando el método replace().Finalmente, se utiliza la función writeFileSync() del módulo fs para escribir el archivo actualizado.Recuerda que en cada ejemplo se deben utilizar nombres de variables diferentes según corresponda al archivo y a la línea que se desea copiar.