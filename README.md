# API-REST - Desenvolvimento Web  


🚀​ **1. Projeto ---**

Criar uma API REST simples utilizando Node.js e Express -- 
A API servirá para gerenciar uma lista de tarefas (To-do list), com funcionalidades básicas de CRUD, são elas **GET, POST, PUT e DELETE**.


​📈​ **2. Pré-Requisitos + Instalação ---**

Instalar o Visual Studio Code, será nossa ferramenta de criação. 
Instalar o Node.js --> No terminal em seu Visual Studio Code, digite --> npm init -y
Instalar o Framework Express --> No terminal em seu Visual Studio Code, digite --> npm install express

👾​ **3. Comando para iniciar o servidor ---**

Após instalar as dependências e gerar sua API;
Abra seu terminal e digite "server.js" / "app.js" / "index.js" --> Difere dependendo de como você criou em seu projeto, portanto, por ser via JSON, sempre finalizará em ".js".

Aparecerá - "Servidor rodando em http://localhost{port} <-- Você definiu a porta de seu endereço no inicio de seu código.


🏘️ **4. Rotas disponíveis da API + Exemplos de JSON ---**

**Endereço base http://localhost:3000**

-- Rota para Listar Todas as Tarefas --
Método: **GET**
Rota: /tarefas
O que ela faz: Retorna a lista completa de todas as tarefas que existem na memória. É a visão geral do nosso sistema.

-- Rota para Buscar uma Única Tarefa --
Método: **GET**
Rota: /tarefas/:id
O que ela faz: Busca e retorna os dados de uma única tarefa específica. O :id na rota é um parâmetro, ou seja, você deve substituí-lo pelo número de identificação da tarefa que deseja ver.
Exemplo prático: GET /tarefas/1 buscaria a tarefa com id igual a 1.

-- Rota para Criar uma Nova Tarefa --
Método: **POST**
Rota: /tarefas
O que ela faz: Cria uma nova tarefa e a adiciona à lista. Os dados da tarefa a ser criada (no nosso caso, a descricao) devem ser enviados no corpo (body) da requisição, em formato JSON.

-- Rota para Atualizar uma Tarefa Existente --
Método: **PUT**
Rota: /tarefas/:id
O que ela faz: Modifica uma tarefa que já existe, identificada pelo :id na URL. Os dados a serem alterados (a descricao e/ou o status concluida) devem ser enviados no corpo da requisição em JSON.
Exemplo prático: PUT /tarefas/3 com {"concluida": true} no corpo vai atualizar a tarefa de id 3.

-- Rota para Deletar uma Tarefa --
Método: **DELETE**
Rota: /tarefas/:id
O que ela faz: Remove permanentemente uma tarefa da lista, identificada pelo :id.


✅​ **5. Como testar no Postman --**

Bom, chegou na hora do GRANFINALE, o TESTE, será que ocorreu tudo bem? Iremos descobrir!
Ao entrar no Postman, certifique-se de logar-se ou registrar-se, após esse passo importante, vamos lá;

Clicamos em "Integration testing basics", selecione o "Workspace", clicamos em "New" -> "Http" -> para um novo projeto e let's bora;
Ao fazer esse processo, temos o CRUD ---> GET, POST, PUT e DELETE.

Selecione o que quer testar e divirta-se.

**Lembrando que: o endereço base, mantém "http://localhost:{port}"**

