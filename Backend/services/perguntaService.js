const PerguntaModel = require('../models/perguntaModel');

class PerguntaService {
  static async getAllPerguntas() {
    return await PerguntaModel.find().populate('autor respostas');
  }

  static async getPerguntaById(idPergunta) {
    return await PerguntaModel.findById(idPergunta).populate('autor respostas');
  }

  static async createPergunta(pergunta) {
    const newPergunta = new PerguntaModel(pergunta);
    return await newPergunta.save();
  }

  static async updatePergunta(idPergunta, updatedPergunta) {
    return await PerguntaModel.findByIdAndUpdate(idPergunta, updatedPergunta, { new: true });
  }

  static async deletePergunta(idPergunta) {
    return await PerguntaModel.findByIdAndDelete(idPergunta);
  }
}

module.exports = PerguntaService;