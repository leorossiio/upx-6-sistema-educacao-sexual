# Como testar o projeto:

Pré-requisitos;
Node.js instalado;
Banco MongoDB configurado;
Certifique-se de ter um arquivo .env configurado corretamente;

# Passos para rodar o servidor das APIs/backend:

cd /backend;
npm install --legacy-peer-deps;

Inicie o servidor:
node index.mjs;

# Passos para rodar o React/Frontend:

cd /blu-plataform;
npm install react-router-dom
npm install sass

Inicie o servidor:
npm start

# .env
PORT = 3000 || <Porta de preferência, certificar-se de alterar as rotas>
DB_NAME = <name_database>
DB_USER = <user_database>
DB_PASS = <pass_database>

JWT_SECRET = <JWT_SECRET>
