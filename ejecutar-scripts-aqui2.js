const readline = require("readline");
const { exec } = require("child_process");

// Definir el menú con los nombres de los programas
const menu = [
  { numero: "1", nombre: "Copiar línea de texto", archivo: "copiar-linea.js" },
  { numero: "2", nombre: "Copiar varias líneas de texto", archivo: "copiar-linea2.js" },
  { numero: "3", nombre: "Copiar línea de texto a un archivo", archivo: "copiar-linea3.js" },
  { numero: "4", nombre: "Ejecutar scripts aquí", archivo: "ejecutar-scripts-aqui.js" },
  { numero: "5", nombre: "Ejemplos", archivo: "ejemplos.js" },
];

// Crear una instancia de readline para leer la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Mostrar el menú en la consola
console.log("Seleccione un programa:");
menu.forEach((opcion) => {
  console.log(`${opcion.numero}. ${opcion.nombre}`);
});

// Leer la opción seleccionada por el usuario
rl.question("Ingrese el número del programa que desea ejecutar: ", (numero) => {
  // Buscar el programa correspondiente en el menú
  const programa = menu.find((opcion) => opcion.numero === numero);

  if (programa) {
    console.log(`Ejecutando ${programa.nombre}...`);

    // Ejecutar el programa utilizando el comando "node"
    const proceso = exec(`node ${programa.archivo}`);

    proceso.stdout.on("data", (datos) => {
      console.log(datos);
    });

    proceso.stderr.on("data", (datos) => {
      console.error(datos);
    });
  } else {
    console.log("Opción inválida.");
  }

  rl.close();
});
