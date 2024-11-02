const express = require('express');
const RespostaService = require('../../services/respostaService');
const auth = require("../../middlewares/authentication");

const router = express.Router();

// Criar uma nova resposta
router.post('/', auth, async (req, res) => {
  try {
    const { conteudo, pergunta } = req.body;
    const autorRespostaId = req.user.idUser; // Obter o ID do usuário do token
    const autorRespostaNome = req.user.nome;


    const resposta = await RespostaService.criarResposta({ conteudo, autorRespostaId, autorRespostaNome, pergunta });
    res.status(201).json(resposta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar resposta.' });
  }
});

// Listar todas as respostas de uma pergunta
router.get('/pergunta/:perguntaId', async (req, res) => {
  try {
    const { perguntaId } = req.params;
    const respostas = await RespostaService.listarRespostasPorPergunta(perguntaId);
    res.json(respostas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar respostas.' });
  }
});

// Obter uma resposta pelo ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resposta = await RespostaService.obterRespostaPorId(id);
    if (!resposta) {
      return res.status(404).json({ message: 'Resposta não encontrada.' });
    }
    res.json(resposta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter resposta.' });
  }
});

// Atualizar uma resposta
router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { conteudo } = req.body;
    const autorRespostaId = req.user.idUser; // Obter o ID do usuário do 
    const userFuncao = req.user.funcao;

    // Verificar se a resposta existe e pertence ao usuário logado
    const resposta = await RespostaService.obterRespostaPorId(id);
    if (!resposta) {
      return res.status(404).json({ message: 'Resposta não encontrada.' });
    }

    if (resposta.autorRespostaId.toString() !== autorRespostaId && userFuncao !== "ADM") {
      return res.status(403).json({ message: 'Você não tem permissão para editar esta pergunta.' });
    }

    const respostaAtualizada = await RespostaService.atualizarResposta(id, { conteudo });
    res.json(respostaAtualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar resposta.' });
  }
});

// Deletar uma resposta
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const autorRespostaId = req.user.idUser; // Obter o ID do usuário do token
    const userFuncao = req.user.funcao;

    // Verificar se a resposta existe e pertence ao usuário logado
    const resposta = await RespostaService.obterRespostaPorId(id);
    if (!resposta) {
      return res.status(404).json({ message: 'Resposta não encontrada.' });
    }

    if (resposta.autorRespostaId.toString() !== autorRespostaId && userFuncao !== "ADM") {
      return res.status(403).json({ message: 'Você não tem permissão para deletar esta pergunta.' });
    }

    await RespostaService.deletarResposta(id);
    res.json({ message: 'Resposta deletada com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar resposta.' });
  }
});

module.exports = router;