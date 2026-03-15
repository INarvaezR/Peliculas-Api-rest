const mongoose = require("mongoose");

const getConnection = async () => {
  try {
    const url = process.env.MONGO_URI;

    await mongoose.connect(url);

    console.log("✅ Conexión exitosa a MongoDB Atlas establecida");

  } catch (error) {
    console.error("❌ Error al conectarse a MongoDB Atlas:", error);
    process.exit(1);
  }
};

module.exports = {
  getConnection
};