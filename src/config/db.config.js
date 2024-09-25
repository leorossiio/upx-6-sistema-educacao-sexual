const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const connectDB = async () => {
  // Configurações do banco de dados
  const DB_NAME = process.env.DB_NAME;
  const DB_USER = process.env.DB_USER;
  const DB_PASS = process.env.DB_PASS;
  const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@crud-app.yso2wfp.mongodb.net/${DB_NAME}`;//TODO

  try {
    await mongoose.connect(DB_URL);
    console.log("Banco de dados conectado com sucesso");
  } catch (error) {
    console.log(`Erro ao conectar no banco de dados. ${error}`);
    process.exit(1); // Para a aplicação se a conexão falhar
  }
};

module.exports = connectDB;
