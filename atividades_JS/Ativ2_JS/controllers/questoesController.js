const path = require('path');

exports.mostrarQuestao = (req, res) => {
  const questao = req.params.questao;
  const filePath = path.join(__dirname, `../views/${questao}.html`);
  console.log('Tentando servir o arquivo:', filePath);  // Verifica o caminho gerado
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Erro ao servir o arquivo:', err);
      res.status(404).send('Questão não encontrada.');
    }
  });
};