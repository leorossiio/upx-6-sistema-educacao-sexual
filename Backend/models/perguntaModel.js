const mongoose = require("mongoose");

const PerguntaSchema = new mongoose.Schema({
  idPergunta: { type: String, required: true, unique: true },
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // relacionamento com User
  dataCriacao: { type: Date, default: Date.now },
  respostas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resposta" }] // referência para as respostas
});

const PerguntaModel = mongoose.model("Pergunta", PerguntaSchema);

module.exports = PerguntaModel;