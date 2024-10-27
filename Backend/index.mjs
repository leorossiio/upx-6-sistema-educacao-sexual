import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

import loginController from "./Controllers/loginController.js";
import userController from "./Controllers/autenticadas/userController.js";
import perguntaController from "./Controllers/autenticadas/perguntaController.js";
import respostaController from "./Controllers/autenticadas/respostaController.js";

const servidor = express();

servidor.use(express.json());

servidor.use("/login", loginController);
servidor.use("/users", userController);
servidor.use("/perguntas", perguntaController);
servidor.use("/respostas", respostaController)

// Conexão com o banco de dados MongoDB
const PORT = process.env.PORT || 3000;  // Porta padrão caso não esteja definida no .env
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster-main.7iegg.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=${DB_NAME}`;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Banco de dados conectado com sucesso");
    servidor.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Erro ao conectar no banco de dados. ${error}`);
  });