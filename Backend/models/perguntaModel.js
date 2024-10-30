const mongoose = require("mongoose");

const PerguntaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  categoria: { type: String, required: true },
  autorPerguntaId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  autorPerguntaNome: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
  respostas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resposta" }]
});

const PerguntaModel = mongoose.model("Pergunta", PerguntaSchema);

module.exports = PerguntaModel;