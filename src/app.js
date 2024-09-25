const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.config"); // Importa a função de conexão

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const servidor = express();

// Middleware para processar o corpo das solicitações como JSON
servidor.use(express.json());

// Middleware para permitir solicitações de outros domínios (CORS)
servidor.use(cors());

// Define as rotas para os controladores de login, usuário e tarefas
// servidor.use("/login", loginController);

// Conecta ao banco de dados
connectDB();

// Inicia o servidor após a conexão com o banco de dados
const PORT = process.env.PORT || 3000; // Usa a porta definida no .env ou 3000 como padrão

servidor.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
