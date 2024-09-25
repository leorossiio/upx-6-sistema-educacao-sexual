const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    idUsuario: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    funcao: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now },
    crm: { type: String, required: false },
    celular: { type: String, required: true },
    status: { type: String, required: true }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;

// Site de validação:
// https://portal.cfm.org.br/busca-medicos