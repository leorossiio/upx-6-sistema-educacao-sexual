const express = require('express');
const PerguntaService = require('../../services/perguntaService');
const auth = require("../../middlewares/authentication");

const router = express.Router();

// Criar uma nova pergunta
router.post('/', auth, async (req, res) => {
  try {
    const { titulo, descricao } = req.body;
    const autor = req.user.idUser; // Obter o ID do usuário do token

    const pergunta = await PerguntaService.criarPergunta({ titulo, descricao, autor });
    res.status(201).json(pergunta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar pergunta.' });
  }
});

// Listar todas as perguntas
router.get('/', async (req, res) => {
  try {
    const perguntas = await PerguntaService.listarPerguntas();
    res.json(perguntas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar perguntas.' });
  }
});

// Obter uma pergunta pelo ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pergunta = await PerguntaService.obterPerguntaPorId(id);
    if (!pergunta) {
      return res.status(404).json({ message: 'Pergunta não encontrada.' });
    }
    res.json(pergunta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter pergunta.' });
  }
});

// Atualizar uma pergunta
router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descricao } = req.body;
    const autor = req.user.idUser; // Obter o ID do usuário do token

    // Verificar se a pergunta existe e pertence ao usuário logado
    const pergunta = await PerguntaService.obterPerguntaPorId(id);
    if (!pergunta) {
      return res.status(404).json({ message: 'Pergunta não encontrada.' });
    }
    if (pergunta.autor.toString() !== autor) {
      return res.status(403).json({ message: 'Você não tem permissão para editar esta pergunta.' });
    }

    const perguntaAtualizada = await PerguntaService.atualizarPergunta(id, { titulo, descricao });
    res.json(perguntaAtualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar pergunta.' });
  }
});

// Deletar uma pergunta
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const autor = req.user.idUser; // Obter o ID do usuário do token

    // Verificar se a pergunta existe e pertence ao usuário logado
    const pergunta = await PerguntaService.obterPerguntaPorId(id);
    if (!pergunta) {
      return res.status(404).json({ message: 'Pergunta não encontrada.' });
    }
    if (pergunta.autor.toString() !== autor) {
      return res.status(403).json({ message: 'Você não tem permissão para deletar esta pergunta.' });
    }

    await PerguntaService.deletarPergunta(id);
    res.json({ message: 'Pergunta deletada com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar pergunta.' });
  }
});

module.exports = router;