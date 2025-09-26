const express = require('express');
const app = express();
const port = 3000;

// Const --> Constante (não pode ser reatribuída) --- //

// Middleware o Express entender o JSON //
app.use(express.json());

// "let" - Declarar váriavel que pode ser reatribuída (tipo array(vetor)) ---> Nome da váriavel "tarefas" //
let tarefas = [
  { id: 1, descricao: "Ir trabalhar", concluida: false },
  { id: 2, descricao: "Ir para a academia", concluida: true },
  { id: 3, descricao: "Ir para a faculdade", concluida: false }
];

// Rota principal - início de tudo//
app.get('/', (req, res) => {
  res.send('API de Lista de Tarefas está no ar!');
});


// --- Operações CRUD para Tarefas --> GET, POST, PUT, DELETE //

// 1. GET /tarefas - Listar todas as tarefas --> Trás TODAS as tarefas //
app.get('/tarefas', (req, res) => {
  res.status(200).json(tarefas);
});

// 2. GET /tarefas/:id - Buscar uma tarefa ESPECÍFICA pelo ID //
app.get('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ message: "Tarefa não encontrada." });
  }
  
  res.status(200).json(tarefa);
});

// 3. POST /tarefas - Adicionar uma nova tarefa --> Adiciona uma nova tarefa //
app.post('/tarefas', (req, res) => {
  const { descricao } = req.body;
  
  if (!descricao) {
    return res.status(400).json({ message: "A descrição da tarefa é obrigatória."});
  }

  const novaTarefa = {
    id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1, // Gera um novo ID (incremental) // 
    descricao: descricao,
    concluida: false 
  };

  tarefas.push(novaTarefa);
  res.status(201).json({ message: "Tarefa criada com sucesso!", tarefa: novaTarefa });
});

// 4. PUT /tarefas/:id - Atualizar uma tarefa (descrição ou status) --> Atualiza uma tarefa existente //
app.put('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { descricao, concluida } = req.body;
  const index = tarefas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Tarefa não encontrada." });
  }
  
  // Atualiza os campos se eles foram fornecidos no corpo da requisição
  if (descricao) {
    tarefas[index].descricao = descricao;
  }
  if (concluida !== undefined) { 
    tarefas[index].concluida = concluida;
  }  
  // ^^^^ Se uma nova descrição foi enviada, atualize a descrição da tarefa. Se não, não faça nada com ela ^^^^ //
  
  res.status(200).json({ message: "Tarefa atualizada com sucesso!", tarefa: tarefas[index]});
});

// 5. DELETE /tarefas/:id - Deletar uma tarefa pelo ID --> Deleta uma tarefa existente //
app.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tarefas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Tarefa não encontrada." });
  }
  
  tarefas.splice(index, 1); // Remove a tarefa do array(vetor) //
  res.status(200).json({ message: "Tarefa deletada com sucesso." });
});


// Inicia o servidor para ouvir as requisições - Aula-Api //
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});