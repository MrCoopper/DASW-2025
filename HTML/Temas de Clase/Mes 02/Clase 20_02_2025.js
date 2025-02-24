// Funcion convalores default si es que el usuario no manda todos los parametros
function printValues(nombre, apellido, edad = 19, estatura = 1.75) {
    return `| Nombre = ${nombre} | Apellido = ${apellido} | Edad = ${edad} | Estatura = ${estatura} |`
}

// Funcion main para mandar los valores para imprimir los valores
function main() {
    console.log(printValues("Sebas", "Sanchez"))
    console.log(printValues("Sebas", "Sanchez", 20))
    console.log(printValues("Sebas", "Sanchez", 20, 1.71))
}

main()