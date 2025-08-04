# 📦 Sistema de Controle de Estoque

Este é um sistema completo de controle de estoque, baseado em microsserviços Java com Spring Boot no backend e uma aplicação Angular 17+ no frontend. A solução permite gerenciar produtos e consultar o estoque de forma simples e eficiente.

## 🚀 Tecnologias Utilizadas

### Backend
- Java 17
- Spring Boot 3.x
- Spring Web
- Spring Data JPA (Hibernate)
- PostgreSQL
- Maven
- APIs REST
- RestTemplate (comunicação entre microsserviços)

### Frontend
- Angular 17+
- TypeScript
- RxJS
- HTML/CSS
- Tailwind CSS (opcional)
- Angular CLI
- Zone.js desativado
- Detecção de mudanças com ChangeDetectorRef

## 🧩 Arquitetura da Solução

O projeto é composto por:
- 🔹 Serviço A – Gerenciamento de Produtos
- 🔹 Serviço B – Consulta de Estoque
- 🔹 Frontend Angular para consumo das APIs e interação com o usuário

Cada serviço possui seu banco de dados PostgreSQL próprio e comunicação entre eles ocorre via REST/JSON.

## 🛠️ Microsserviços

### 🟦 Serviço A – Gerenciamento de Produtos

Responsável pelas operações CRUD de produtos.

Funcionalidades:
- Criar, listar, buscar por ID, atualizar e excluir produtos.

Campos do Produto:
- id (Long)
- nome (String)
- descricao (String)
- preco (BigDecimal)
- quantidadeEstoque (Integer)

URL Base: http://localhost:8081/api/produtos

### 🟨 Serviço B – Consulta de Estoque

Consulta a disponibilidade de um produto acessando o Serviço A via REST.

Funcionalidade:
- Recebe o ID do produto na URL.
- Consulta o Serviço A para obter os dados.
- Verifica se o estoque está abaixo de 10 unidades.
- Retorna JSON com os dados e status de estoque.

URL Base: http://localhost:8082/api/estoque/{id}

## 🧱 Banco de Dados

Cada microsserviço utiliza um banco distinto:
- produtos_db – utilizado pelo Serviço A
  (criar manualmente no PostgreSQL antes da execução)

## 💻 Frontend – Aplicação Angular

O frontend fornece uma interface de usuário moderna e intuitiva, consumindo os serviços REST dos microsserviços para exibir e manipular os dados.

Componentes principais:
- lista-produtos/ – Listagem com ações
- cadastro-produto/ – Formulário com validações
- consulta-estoque/ – Detalhes e status do produto

Estrutura do Projeto Angular:

src/
├── main.ts                  # Ponto de entrada
├── styles.css               # Estilos globais (Tailwind opcional)
└── app/
    ├── app.component.ts     # Componente raiz/layout
    ├── app.config.ts        # Configurações (HttpClient, roteamento)
    ├── app.routes.ts        # Rotas da aplicação
    ├── product.model.ts     # Interfaces Produto e Estoque
    ├── product.service.ts   # Serviço HTTP (REST)
    └── .../                 # Componentes por funcionalidade

## 📚 Funcionalidades da Aplicação

- 📋 Lista de Produtos (/produtos)
  Exibe todos os produtos cadastrados com opções para cadastro e consulta de estoque.

- ➕ Cadastro de Produto (/produtos/novo)
  Formulário com validações. Campos: nome, preço, quantidade.

- 🔍 Consulta de Estoque (/estoque/:id)
  Mostra nome, preço, quantidade e status de estoque (baixo ou suficiente) com base nos dados do Serviço B.

## ▶️ Como Executar o Projeto

### Backend

Pré-requisitos:
- Java 17
- PostgreSQL
- Maven

Passos:
git clone https://github.com/kauan-17/projeto-de-estoque
cd projeto-de-estoque

1. Crie o banco de dados produtos_db no PostgreSQL.
2. Compile e execute cada serviço separadamente:

cd servico-a
mvn spring-boot:run

cd ../servico-b
mvn spring-boot:run

### Frontend (Angular)

Pré-requisitos:
- Node.js 18+
- Angular CLI 17+

Passos:
cd meu-projeto-zoneless-novo
npm install
ng serve

Acesse: http://localhost:4200

⚠️ Os microsserviços devem estar rodando nas portas 8081 (Serviço A) e 8082 (Serviço B).

## ✅ Observações Finais

- Microsserviços independentes com seus próprios bancos de dados.
- Comunicação via REST usando JSON.
- Frontend leve, modular e funcional.
- Zone.js desativado com detecção manual de mudanças.
- Estrutura pronta para deploy em containers ou nuvem com pequenos ajustes.
