const RespostaModel = require('../models/respostaModel');
const PerguntaModel = require('../models/perguntaModel');
const UserModel = require('../models/userModel');

class RespostaService {

  async criarResposta({ conteudo, autorRespostaId, autorRespostaNome, pergunta }) {
    const novaResposta = new RespostaModel({ conteudo, autorRespostaId, autorRespostaNome, pergunta });
    await novaResposta.save();

    // Atualizar a pergunta com a nova resposta
    await PerguntaModel.findByIdAndUpdate(pergunta, { $push: { respostas: novaResposta._id } }); 
    return novaResposta;
  }

  async listarRespostasPorPergunta(perguntaId) {
    return RespostaModel.find({ pergunta: perguntaId });
  }

  async obterRespostaPorId(id) {
    return RespostaModel.findById(id);
  }

  async atualizarResposta(id, { conteudo }) {
    return RespostaModel.findByIdAndUpdate(id, { conteudo }, { new: true });
  }

  async deletarResposta(id) {
    // Remover a resposta da pergunta
    const resposta = await RespostaModel.findById(id);
    await PerguntaModel.findByIdAndUpdate(resposta.pergunta, { $pull: { respostas: resposta._id } });

    // Deletar a resposta
    return RespostaModel.findByIdAndDelete(id);
  }
}

module.exports = new RespostaService();