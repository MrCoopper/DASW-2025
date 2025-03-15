// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

async function obtenerUsuarios() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/");

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    let datos = await response.json();
    console.log(datos)
}

obtenerUsuarios();



async function actualizarUsuario (id, nuevosDatos) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: PATCH,
        body: JSON.stringify(nuevosDatos),
        headers: {
            "Content-Type": "application/json"
        }
    });

    let datos = await response.json();
    console.log(`Usuario Actualizado: ${datos}`);
}

actualizarUsuario(3, {nombre: "Carlos"})

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|