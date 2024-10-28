const PerguntaModel = require('../models/perguntaModel');
const UserModel = require('../models/userModel');

class PerguntaService {

  async criarPergunta({ titulo, descricao, autorPergunta }) {
    try {
      const novaPergunta = new PerguntaModel({ titulo, descricao, autorPergunta });
      return await novaPergunta.save();
    } catch (error) {
      console.error("Erro ao criar pergunta:", error);
      throw new Error('Erro ao criar pergunta.');
    }
  }

  async listarPerguntas() {
    try {
      return await PerguntaModel.find()
      .populate('autorPergunta', 'nome', UserModel) //TODO - AINDA ESTÁ VINDO COM AUTOR NULL
      .populate({
        path: 'respostas',
        populate: {
          path: 'autorResposta',
          select: 'nome'
        }
      });
    } catch (error) {
      console.error("Erro ao listar perguntas:", error);
      throw new Error('Erro ao listar perguntas.');
    }
  }

  async obterPerguntaPorId(id) {
    try {
      const pergunta = await PerguntaModel.findById(id)
        .populate('autorPergunta', 'nome')
        .populate({
          path: 'respostas',
          populate: {
            path: 'autorResposta',
            select: 'nome'
          }
        });
      if (!pergunta) {
        throw new Error('Pergunta não encontrada.');
      }
      return pergunta;
    } catch (error) {
      console.error("Erro ao obter pergunta:", error);
      throw new Error('Erro ao obter pergunta.');
    }
  }

  async atualizarPergunta(id, { titulo, descricao }) {
    try {
      const pergunta = await PerguntaModel.findById(id);
      if (!pergunta) {
        throw new Error('Pergunta não encontrada.');
      }
      pergunta.titulo = titulo;
      pergunta.descricao = descricao;
      return await pergunta.save();
    } catch (error) {
      console.error("Erro ao atualizar pergunta:", error);
      throw new Error('Erro ao atualizar pergunta.');
    }
  }

  async deletarPergunta(id) {
    try {
      const pergunta = await PerguntaModel.findById(id);
      if (!pergunta) {
        throw new Error('Pergunta não encontrada.');
      }
      return await pergunta.remove();
    } catch (error) {
      console.error("Erro ao deletar pergunta:", error);
      throw new Error('Erro ao deletar pergunta.');
    }
  }
}

module.exports = new PerguntaService();