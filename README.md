 Sistema de Controle de Estoque – Microsserviços com Frontend Angular
Este projeto implementa um sistema completo de controle de estoque, baseado em dois microsserviços Java com Spring Boot no backend e uma aplicação Angular no frontend. A solução permite o gerenciamento de produtos e a consulta de estoque, oferecendo uma interface de usuário intuitiva para interação com os serviços REST.

 Arquitetura da Solução
A arquitetura é composta por:

 Dois microsserviços independentes:

Serviço A – Gerenciamento de Produtos

Serviço B – Consulta de Estoque

 Um frontend em Angular 17+ que consome as APIs dos serviços.

Microsserviços
 Serviço A – Gerenciamento de Produtos
Responsável pelas operações de CRUD dos produtos.

Funcionalidades:

Criar, listar, buscar por ID, atualizar e excluir produtos.

Campos do produto:

id (Long)

nome (String)

descricao (String)

preco (BigDecimal)

quantidadeEstoque (Integer)

URL Base: http://localhost:8081/api/produtos

 Serviço B – Consulta de Estoque
Consulta a disponibilidade de um produto acessando o Serviço A via REST.

Funcionalidade:

Recebe um ID de produto via URL.

Consulta o Serviço A e obtém os dados.

Verifica se a quantidade está abaixo de 10 unidades (estoque baixo).

Resposta: JSON com dados do produto e status de estoque.

URL Base: http://localhost:8082/api/estoque/{id}

 Banco de Dados
Cada serviço utiliza seu próprio banco PostgreSQL:

produtos_db (Serviço A)

 Crie os bancos antes de rodar os serviços.

 Tecnologias Backend
Java 17

Spring Boot 3.x

Spring Web, Spring Data JPA (Hibernate)

PostgreSQL

Maven

APIs REST

RestTemplate (comunicação entre microsserviços)

Frontend – Aplicação Angular
O frontend é responsável por fornecer a interface de usuário do sistema, consumindo os serviços REST dos microsserviços para exibir e manipular os dados de produtos e estoque.

 Estrutura do Projeto
A aplicação Angular segue uma estrutura modular com componentes standalone:

src/main.ts: Ponto de entrada da aplicação.

src/app/app.config.ts: Configurações globais (HttpClient, roteamento, detecção de mudanças sem Zone.js).

src/app/app.component.ts: Componente raiz que define o layout e roteamento.

src/app/app.routes.ts: Define as rotas da aplicação.

src/app/product.model.ts: Define as interfaces Produto e Estoque.

src/app/product.service.ts: Serviço HTTP que conecta com os microsserviços.

Componentes por funcionalidade:

lista-produtos/

cadastro-produto/

consulta-estoque/

src/styles.css: Estilos globais (ex: Tailwind CSS se usado).

 Funcionalidades e Telas
 Lista de Produtos (/produtos):

Exibe todos os produtos cadastrados.

Ações: cadastrar novo produto, consultar estoque.

 Cadastro de Produto (/produtos/novo):

Formulário com validação.

Campos: nome, preço, quantidade.

Envia dados para o Serviço A.

 Consulta de Estoque (/estoque/:id):

Exibe nome, preço, quantidade e status de estoque.

Dados vêm do Serviço B.

 Tecnologias Frontend
Angular 17+

TypeScript

HTML/CSS

RxJS

Angular CLI

Tailwind CSS (opcional)

Detecção manual de mudanças com ChangeDetectorRef

 Zone.js desativado: a atualização da UI é feita manualmente após as chamadas HTTP.

Como Executar o Projeto
 Backend
Pré-requisitos:

Java 17

PostgreSQL rodando

Maven

Passos:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/controle-de-estoque.git
cd controle-de-estoque
Crie o banco de dados produtos_db no PostgreSQL.

Compile e rode os dois serviços (servico-a e servico-b) separadamente com:

bash
Copiar
Editar
mvn spring-boot:run
Frontend (Angular)
Pré-requisitos:

Node.js 18+ (recomendado LTS)

Angular CLI 17+

Passos:

bash
Copiar
Editar
cd meu-projeto-zoneless-novo
npm install
ng serve
Acesse: http://localhost:4200

Certifique-se de que os serviços A (porta 8080) e B (porta 8082) estão em execução antes de iniciar o frontend.

 Observações Finais
Microsserviços separados, com banco de dados individual.

Comunicação via REST (JSON).

Frontend leve e funcional com componentes independentes.

Boa separação de responsabilidades entre backend e frontend.

Pronto para deploy em containers ou nuvem com ajustes mínimos.

