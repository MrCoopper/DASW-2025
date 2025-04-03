import express from "express";
import path from "path";

const port = 3000;
const app = express();

app.use(express.json());

// --- Primera funcion (Validacion de API Key) ---
function apiKeyValidator(req, res, next) {
  const apiKey = req.headers["api-key"];
  console.log("apiKey: ", apiKey);

  if (!apiKey || !apiKey.startsWith("ejbe")) {
    return res.status(404).json({ error: "no header api-key" });
  }

  next();
}

// --- Segunda funcion (Autenticacion simulada con token) ---
function authenticateSimulation(req, res, next) {
  const TokenAuthHeader = req.headers["authorization"];
  console.log("TokenAuthHeader: ", TokenAuthHeader);

  if (!TokenAuthHeader || !TokenAuthHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Error|No header autorizado" });
  }

  const token = TokenAuthHeader.split("Bearer ")[1];
  if (token !== "hola mundo autenticame") {
    return res.status(401).json({ error: "Error|Token invalido" });
  }

  next();
}

// --- Definir la ruta con middlewares de validacion y autenticacion ---
app.get("/", apiKeyValidator, authenticateSimulation, (req, res) => {
  res.json({ message: "Acceso permitido" });
});

// --- Inicializar el servidor ---
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
