const RespostaModel = require('../models/respostaModel');

class RespostaService {

  async criarResposta({ conteudo, autor, pergunta }) {
    const novaResposta = new RespostaModel({ conteudo, autor, pergunta });
    await novaResposta.save();

    // Atualizar a pergunta com a nova resposta
    await PerguntaModel.findByIdAndUpdate(pergunta, { $push: { respostas: novaResposta._id } }); 
    return novaResposta;
  }

  async listarRespostasPorPergunta(perguntaId) {
    return RespostaModel.find({ pergunta: perguntaId }).populate('autor', 'nome');
  }

  async obterRespostaPorId(id) {
    return RespostaModel.findById(id).populate('autor', 'nome');
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