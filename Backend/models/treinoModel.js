const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")

const TreinoSchema = new mongoose.Schema({
  idTreino: { type: String, default: uuidv4, unique: true, required: true },
  idUser: { type: String, required: true },
  idUserCriador: { type: String, required: true },
  nome: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
  descricao: { type: String, required: true },
})

const TreinoModel = mongoose.model("Treino", TreinoSchema)

module.exports = TreinoModel
