const RespostaModel = require('../models/respostaModel');

class RespostaService {
  static async getRespostasByPerguntaId(idPergunta) {
    return await RespostaModel.find({ pergunta: idPergunta }).populate('autor');
  }

  static async createResposta(idPergunta, respostaData) {
    const newResposta = new RespostaModel({ ...respostaData, pergunta: idPergunta });
    return await newResposta.save();
  }

  static async getRespostaById(idResposta) {
    return await RespostaModel.findById(idResposta).populate('autor pergunta');
  }

  static async updateResposta(idResposta, updatedData) {
    return await RespostaModel.findByIdAndUpdate(idResposta, updatedData, { new: true });
  }

  static async deleteResposta(idResposta) {
    return await RespostaModel.findByIdAndDelete(idResposta);
  }
}

module.exports = RespostaService;