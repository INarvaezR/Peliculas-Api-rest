require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { getConnection } = require("./db/db-connection-mongo");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

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