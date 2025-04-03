const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'nodejs/prueba_De_Estatics'))); // Para la raíz
app.use('/admin', express.static(path.join(__dirname, 'nodejs/prueba_De_Estatics'))); // Para /admin

app.get('*', (req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});