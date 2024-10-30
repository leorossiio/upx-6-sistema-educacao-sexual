const mongoose = require("mongoose");

const RespostaSchema = new mongoose.Schema({
  conteudo: { type: String, required: true },
  autorRespostaId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  autorRespostaNome: { type: String, required: true },
  pergunta: { type: mongoose.Schema.Types.ObjectId, ref: "Pergunta", required: true },
  dataCriacao: { type: Date, default: Date.now }
});

const RespostaModel = mongoose.model("Resposta", RespostaSchema);

module.exports = RespostaModel;