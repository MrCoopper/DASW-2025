// Middleware de autenticación
const validateAdmin = (req, res, next) => {
  const authHeader = req.headers["x-auth"];
  if (authHeader !== "admin") {
    return res
      .status(403)
      .send(
        "Acceso no autorizado, no se cuenta con privilegios de administrador"
      );
  }
  next();
};

const { v4: uuid } = require('uuid'); 

module.exports = { 
  uuid,  
  validateAdmin  
};
