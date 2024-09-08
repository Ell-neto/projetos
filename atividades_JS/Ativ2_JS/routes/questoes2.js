const express = require('express');
const router = express.Router();
const path = require('path');

// Rota para a página inicial de seleção de questões
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Rota para exibir a questão específica
router.get('/:questao', (req, res) => {
  const questao = req.params.questao;
  const filePath = path.join(__dirname, `../views/${questao}.html`);
  console.log('Tentando servir o arquivo:', filePath); // Log para verificar o caminho
  res.sendFile(filePath, (err) => {
    if (err) {
      console.log('Erro ao tentar servir o arquivo:', err); // Log do erro
      res.status(404).send('Questão não encontrada.');
    }
  });
});

module.exports = router;
