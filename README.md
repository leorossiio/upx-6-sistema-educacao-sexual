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

# Passos para rodar o Angular/Frontend:

cd /frontend;
npm install --legacy-peer-deps;

Inicie o servidor:
ng serve;

# .env
PORT = 3000 || <Porta de preferência, certificar-se de alterar as rotas>
DB_NAME = <name_database>
DB_USER = <user_database>
DB_PASS = <pass_database>

JWT_SECRET = <JWT_SECRET>
