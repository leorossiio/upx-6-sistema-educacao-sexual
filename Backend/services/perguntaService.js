const PerguntaModel = require('../models/perguntaModel');

class PerguntaService {

  async criarPergunta({ titulo, descricao, autor }) {
    const novaPergunta = new PerguntaModel({ titulo, descricao, autor });
    return novaPergunta.save();
  }

  async listarPerguntas() {
    return PerguntaModel.find().populate('autor', 'nome').populate('respostas', 'conteudo'); 
  }

  async obterPerguntaPorId(id) {
    return PerguntaModel.findById(id).populate('autor', 'nome').populate('respostas', 'conteudo');
  }

  async atualizarPergunta(id, { titulo, descricao }) {
    return PerguntaModel.findByIdAndUpdate(id, { titulo, descricao }, { new: true });
  }

  async deletarPergunta(id) {
    return PerguntaModel.findByIdAndDelete(id);
  }
}

module.exports = new PerguntaService();