/*
let main = function showMessage(text) {
    console.log(text)
}

main("Hola mundo")
*/







/*
// ---------------------------------------------------------------------------------------------------------------------------------|

function generateReport(name, grade, passedfuncvar, failedfuncvar) {
    if (grade >= 6 && grade <= 10) {
        passedfuncvar(name, grade)
    } else if (grade < 6 && grade >= 0) {
        failedfuncvar(name, grade)
    } else {
        console.log(`La calificacion de ${name} no es valida (${grade})\n`)
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------|

function passed(nameStudent, gradeStudent) {
    console.log(`El estudiante ${nameStudent} ha aprobado (${gradeStudent})\n`)

}

// ---------------------------------------------------------------------------------------------------------------------------------|

function failed(nameStudent, gradeStudent) {
    console.log(`El estudiante ${nameStudent} ha reprobado (${gradeStudent})\n`)
}

// ---------------------------------------------------------------------------------------------------------------------------------|
// Llamado a funcion con valores Hardcodeados
generateReport("Sebastian", 12, passed, failed)

// Variables con valores
let nameStudent = "Jesus"
let gradeStudent = 7

let passedvar = passed
let failedvar = failed
// Llamado con valores de variables
generateReport(nameStudent, gradeStudent, passedvar, failedvar)

// Llamado con funcion anonima
generateReport(nameStudent, gradeStudent, 
    function (nameStudent, gradeStudent) {
        console.log(`El estudiante ${nameStudent} ha aprobado (${gradeStudent})\n`)
    }, function (nameStudent, gradeStudent) {
            console.log(`El estudiante ${nameStudent} ha reprobado (${gradeStudent})\n`)
    }
)

// ---------------------------------------------------------------------------------------------------------------------------------|
*/







// Suma de dos numeros
let sum = (a, b) => a + b;
console.log(`La suma de los numeros es ${sum(1, 3)}`);
// Esta función toma dos números como argumentos y devuelve su suma.

// Calcular el doble de un numero
let double = (n) => n * 2;
console.log(`El doble del numero es ${double(4)}`);
// Esta función toma un número como argumento y devuelve el doble de ese número.

// Calculadora de descuento
let discount = (prize, dis) => prize - prize * (dis / 100);
console.log(`El precio con descuento es ${discount(100, 20)}`);
// Esta función toma el precio original y el porcentaje de descuento, y devuelve el precio después de aplicar el descuento.

// Contador de Vocales
let contarVocales = (text) => {
  let cont = 0;
  let textLower = text.toLowerCase();
  for (let i = 0; i < textLower.length; i++) {
    if (
      textLower[i] == "a" ||
      textLower[i] == "e" ||
      textLower[i] == "i" ||
      textLower[i] == "o" ||
      textLower[i] == "u"
    ) {
      cont++;
    }
  }
  return cont;
};
console.log(
  `El numero de vocales en el texto 'Hola mundo' es ${contarVocales(
    "Hola mundo"
  )}`
);
// Esta función toma un texto como argumento y devuelve el número de vocales en el texto.

// Generadora de contraseñas
let generatePassword = (length) => {
  let pass = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    pass += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pass;
};
console.log(`La contraseña generada es ${generatePassword(37)}`);
// Esta función toma un número como argumento y devuelve una contraseña aleatoria de esa longitud.


/*
Explicación de la función generatePassword:

'pass' es una cadena vacía que almacenará la contraseña generada.
'characters' es una cadena que contiene todos los caracteres posibles que pueden formar parte de la contraseña.
Primer Iteración del Bucle (i = 0):

Math.random() genera un número aleatorio entre 0 y 1. Supongamos que genera 0.5.
Math.random() * characters.length multiplica 0.5 por 62 (la longitud de characters), resultando en 31.
Math.floor(31) redondea hacia abajo a 31.
characters.charAt(31) obtiene el carácter en la posición 31 de characters, que es 'f'.
pass ahora es 'f'.
Segunda Iteración del Bucle (i = 1):

Supongamos que Math.random() genera 0.8.
Math.random() * characters.length multiplica 0.8 por 62, resultando en 49.6.
Math.floor(49.6) redondea hacia abajo a 49.
characters.charAt(49) obtiene el carácter en la posición 49 de characters, que es 'x'.
pass ahora es 'fx'.
Tercera Iteración del Bucle (i = 2):

Supongamos que Math.random() genera 0.2.
Math.random() * characters.length multiplica 0.2 por 62, resultando en 12.4.
Math.floor(12.4) redondea hacia abajo a 12.
characters.charAt(12) obtiene el carácter en la posición 12 de characters, que es 'M'.
pass ahora es 'fxM'.
Cuarta Iteración del Bucle (i = 3):

Supongamos que Math.random() genera 0.9.
Math.random() * characters.length multiplica 0.9 por 62, resultando en 55.8.
Math.floor(55.8) redondea hacia abajo a 55.
characters.charAt(55) obtiene el carácter en la posición 55 de characters, que es '3'.
pass ahora es 'fxM3'.
Quinta Iteración del Bucle (i = 4):

Supongamos que Math.random() genera 0.1.
Math.random() * characters.length multiplica 0.1 por 62, resultando en 6.2.
Math.floor(6.2) redondea hacia abajo a 6.
characters.charAt(6) obtiene el carácter en la posición 6 de characters, que es 'G'.
pass ahora es 'fxM3G'.
Resultado Final:
Después de 5 iteraciones, la contraseña generada es 'fxM3G'.
*/