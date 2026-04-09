require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");

const { getConnection } = require("./db/db-connection-mongo");

const app = express();
const port = process.env.PORT || 4000;

// Capa de seguridad básica para cabeceras HTTP
app.use(helmet());

// Limitar el número de peticiones (Rate Limiting)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Cada IP solo puede hacer 100 peticiones por ventana
  message: "Demasiadas peticiones desde esta IP, por favor intenta de nuevo luego."
});
app.use(limiter);

app.use(cors());
app.use(express.json());

// Sanitización contra inyección de operadores NoSQL ($)
// app.use(mongoSanitize()); // Incompatible con Express 5 debido al getter de req.query

/* Ruta raíz */
app.get("/", (req, res) => {
  res.send("API de películas funcionando 🚀");
});

/* Ruta de prueba */
app.get("/test", (req, res) => {
  res.send("FUNCIONA BACKEND");
});

/* Rutas API */
app.use("/api/genero", require("./routes/genero"));
app.use("/api/media", require("./routes/media"));
app.use("/api/director", require("./routes/director"));
app.use("/api/productora", require("./routes/productora"));
app.use("/api/tipo", require("./routes/tipo"));

getConnection();

app.listen(port, () => {
  console.log("PUERTO USADO:", port);
});