// Creacion y el uso del Router

// Codigo de ejemplo para la realizacion de los ejercicios

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
/*
    import express, { json } from 'express';
    const app = express();
    const port = 3000;

    app.use(json());

    app.get('/headers', (req, res) => {
        const receivedHeaders = req.headers;
        console.log('Headers recibidos:', receivedHeaders);
        
        res.json({
            message: "Headers recibidos correctamente",
            headers: receivedHeaders
        });
    });

    app.get('/custom-header', (req, res) => {
        res.set('X-Custom-Header', 'EsteEsUnValorPersonalizado');
        res.json({ message: "Header personalizado enviado en la respuesta" });
    });

    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
    */
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

// ---> Ejercicio 1 <---
// Endpoint /productos/:id

import express, { json } from "express";
import path from "path";
const app = express();
const port = 3000;

app.use(json());

app.get("/productos/:id", (req, res) => {
  const authHeaderProducts = req.headers["x-auth"];
  console.log("Headers recibidos:", req.headers);

  // Comprobación si existe el header x.auth
  if (!authHeaderProducts) {
    return res
      .status(400)
      .json({ error: "No se proporciono el header x.auth" });
  }

  // Respuesta del endpoint con el header x.auth
  res.json({
    message: "Producto encontrado",
    authHeader: authHeaderProducts,
  });
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

// ---> Ejercicio 2 <---
// Endpoint /pagina que lee un archivo HTML

app.get("/pagina", (req, res) => {
  const filePath = path.join(__dirname, "javascript.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send("Error al cargar la pagina");
    }
  });
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

/*
    Explicacion del codigo (Se uso una IA para poder explicar mejor el funcionamiento del codigo para luego poder consultarla en caso de que se necesite):

        Este código crea un servidor usando Express que maneja dos rutas:

        1. **Ejercicio 1: /productos/:id**
            - **Función**:  Verifica si la solicitud contiene el header `x-auth`. Si no está presente, responde con un error 400. Si está 
                            presente, devuelve un JSON con el ID del producto y el valor del header `x-auth`.                
            
            - **Código clave**:
                ```javascript
                const authHeaderProducts = req.headers['x-auth'];
                if (!authHeaderProducts) {
                    return res.status(400).json({ error: 'No se proporcionó el header x.auth' });
                }
                res.json({ message: 'Producto encontrado', productId: req.params.id, authHeader: authHeaderProducts });
                ```

        2. **Ejercicio 2: /pagina**
            - **Función**: Sirve el archivo `javascript.html` al cliente. Si hay un error (como que el archivo no exista), responde con un error 500.
            - **Código clave**:
                ```javascript
                const filePath = path.join(__dirname, 'javascript.html');
                res.sendFile(filePath, (err) => {
                    if (err) {
                        res.status(500).send('Error al cargar la página');
                    }
                });
                ```

        **Módulos utilizados**:
        - **express**: Para crear el servidor y manejar rutas.
        - **path**: Para gestionar rutas de archivos de manera correcta, usando `path.join(__dirname, 'javascript.html')`.

        **Flujo**:
        -   El servidor escucha en el puerto 3000. En la ruta `/productos/:id`, revisa el header `x-auth` y devuelve información del 
            producto si está presente. En la ruta `/pagina`, envía un archivo HTML o un error si no puede acceder al archivo.
*/
