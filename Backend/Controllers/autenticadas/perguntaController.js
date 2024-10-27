const express = require('express');
const PerguntaService = require('../../services/perguntaService');

const router = express.Router();

router.get('/listarPerguntas', async (req, res) => {
  try {
    const perguntas = await PerguntaService.getAllPerguntas();
    res.json(perguntas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving perguntas' });
  }
});

router.get('/:idPergunta', async (req, res) => {
  const { idPergunta } = req.params;
  try {
    const pergunta = await PerguntaService.getPerguntaById(idPergunta);
    if (!pergunta) {
      return res.status(404).json({ message: 'Pergunta not found' });
    }
    res.json(pergunta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving pergunta' });
  }
});

router.post('/criarPergunta', async (req, res) => {
  const newPergunta = req.body;
  try {
    const createdPergunta = await PerguntaService.createPergunta(newPergunta);
    res.status(201).json(createdPergunta);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao criar pergunta' });
  }
});

router.put('/:idPergunta', async (req, res) => {
  const { idPergunta } = req.params;
  const updatedPergunta = req.body;
  try {
    const updated = await PerguntaService.updatePergunta(idPergunta, updatedPergunta);
    if (!updated) {
      return res.status(404).json({ message: 'Pergunta not found' });
    }
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating pergunta' });
  }
});

router.delete('/:idPergunta', async (req, res) => {
  const { idPergunta } = req.params;
  try {
    const deleted = await PerguntaService.deletePergunta(idPergunta);
    if (!deleted) {
      return res.status(404).json({ message: 'Pergunta not found' });
    }
    res.json({ message: 'Pergunta deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting pergunta' });
  }
});

module.exports = router;