const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configura pasta de arquivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Configura as rotas
const questoesRouter = require('./routes/questoes2');
app.use('/atividades2', questoesRouter);

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
