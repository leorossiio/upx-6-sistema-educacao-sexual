const express = require('express');
const RespostaService = require('../../services/respostaService');

const router = express.Router();

// Obtém todas as respostas de uma pergunta específica
router.get('/:idPergunta/respostas', async (req, res) => {
  const { idPergunta } = req.params;
  try {
    const respostas = await RespostaService.getRespostasByPerguntaId(idPergunta);
    res.json(respostas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar respostas' });
  }
});

// Cria uma nova resposta para uma pergunta específica
router.post('/:idPergunta/respostas', async (req, res) => {
  const { idPergunta } = req.params;
  const newResposta = req.body;
  try {
    const createdResposta = await RespostaService.createResposta(idPergunta, newResposta);
    res.status(201).json(createdResposta);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao criar resposta' });
  }
});

// Obtém uma resposta específica por ID
router.get('/:idPergunta/respostas/:idResposta', async (req, res) => {
  const { idPergunta, idResposta } = req.params;
  try {
    const resposta = await RespostaService.getRespostaById(idResposta);
    if (!resposta || resposta.pergunta.toString() !== idPergunta) {
      return res.status(404).json({ message: 'Resposta não encontrada ou não pertence à pergunta' });
    }
    res.json(resposta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar resposta' });
  }
});

// Atualiza uma resposta específica
router.put('/:idPergunta/respostas/:idResposta', async (req, res) => {
  const { idPergunta, idResposta } = req.params;
  const updatedResposta = req.body;
  try {
    const updated = await RespostaService.updateResposta(idResposta, updatedResposta);
    if (!updated || updated.pergunta.toString() !== idPergunta) {
      return res.status(404).json({ message: 'Resposta não encontrada ou não pertence à pergunta' });
    }
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao atualizar resposta' });
  }
});

// Deleta uma resposta específica
router.delete('/:idPergunta/respostas/:idResposta', async (req, res) => {
  const { idPergunta, idResposta } = req.params;
  try {
    const deleted = await RespostaService.deleteResposta(idResposta);
    if (!deleted || deleted.pergunta.toString() !== idPergunta) {
      return res.status(404).json({ message: 'Resposta não encontrada ou não pertence à pergunta' });
    }
    res.json({ message: 'Resposta deletada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar resposta' });
  }
});

module.exports = router;