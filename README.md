# API de Capacitação -- CRUD de Alunos

Este projeto é uma API desenvolvida em **Node.js + TypeScript**,
utilizando o framework **Express**, com objetivo de gerenciar operações
de CRUD relacionadas a *alunos* de um sistema de capacitação.

A API está estruturada em um modelo limpo, utilizando Controllers,
Models, Interfaces e Rotas organizadas dentro da pasta `src/`.

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

-   **Node.js**
-   **Express**
-   **TypeScript**
-   **Nodemon**
-   **ts-node-dev**
-   **Dotenv**

------------------------------------------------------------------------

## 📁 Estrutura do Projeto

    api-capacitacao
    │── package.json
    │── tsconfig.json
    │── .env
    │── .gitignore
    │── README.md
    └── src
        ├── server.ts
        ├── controllers
        │   └── AlunosController.ts
        ├── interfaces
        │   └── IAluno.ts
        ├── models
        │   └── Aluno.ts
        └── routes
            └── alunos.routes.ts

------------------------------------------------------------------------

## ⚙️ Configuração do Ambiente

### 1. Clonar o repositório

``` bash
git clone <url-do-repositorio>
cd api-capacitacao
```

### 2. Instalar dependências

``` bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` com o seguinte conteúdo:

    PORT=3000

### 4. Rodar o projeto

#### Ambiente de desenvolvimento:

``` bash
npm run dev
```

#### Produção:

``` bash
npm run build
npm start
```

------------------------------------------------------------------------

## 📌 Endpoints da API

### **Base URL**

    http://localhost:3000/alunos

### **GET /** -- Listar todos os alunos

Retorna uma lista de alunos cadastrados.

### **GET /:id** -- Buscar aluno por ID

Retorna os dados de um aluno específico.

### **POST /** -- Criar novo aluno

**Body esperado:**

``` json
{
  "nome": "Fulano",
  "curso": "Backend",
  "email": "fulano@email.com"
}
```

### **PUT /:id** -- Atualizar dados de um aluno

Aceita corpo parcial ou completo.

### **DELETE /:id** -- Remover aluno

Exclui o aluno do sistema.

------------------------------------------------------------------------

## 🧱 Arquitetura

-   **Model:** representa a estrutura e manipulação dos dados do aluno.\
-   **Interface:** define o formato esperado para objetos do tipo
    Aluno.\
-   **Controller:** contém a lógica das requisições HTTP.\
-   **Routes:** define os endpoints e direciona para o controller.\
-   **Server.ts:** ponto de entrada da aplicação.

------------------------------------------------------------------------

## 📄 Scripts Disponíveis

  Script            Ação
  ----------------- --------------------------------------
  `npm run dev`     Executa com ts-node-dev (hot reload)

------------------------------------------------------------------------

<p align="center"> Desenvolvido por <strong>Thales Granja</strong> </p>