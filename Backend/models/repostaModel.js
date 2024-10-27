const mongoose = require("mongoose");

const RespostaSchema = new mongoose.Schema({
  idResposta: { type: String, required: true, unique: true },
  conteudo: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  pergunta: { type: mongoose.Schema.Types.ObjectId, ref: "Pergunta", required: true },
  dataCriacao: { type: Date, default: Date.now }
});

const RespostaModel = mongoose.model("Resposta", RespostaSchema);

module.exports = RespostaModel;