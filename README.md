🚀 API do Portfólio Profissional (Spring Boot)

📌 Sobre o Projeto

Este projeto é uma API RESTful desenvolvida em Java com Spring Boot para servir como o backend do meu portfólio profissional. A aplicação é responsável por gerenciar e expor dados sobre meus projetos, habilidades, experiências profissionais e informações de contato, permitindo que o frontend consuma esses dados de forma dinâmica e segura.

O projeto foi construído seguindo os princípios de Clean Code, arquitetura em camadas (MVC) e boas práticas de desenvolvimento de software.

✨ Funcionalidades

Gestão de Projetos: Endpoints para criar, listar, atualizar e deletar (CRUD) projetos do portfólio.

Gestão de Habilidades (Skills): Cadastro de tecnologias e nível de proficiência.

Gestão de Experiências: Histórico profissional e educacional.

Autenticação JWT: Proteção de endpoints sensíveis (ex: rotas de criação e edição) garantindo que apenas o administrador possa modificar os dados.

Documentação Automática: Integração com Swagger/OpenAPI para testar e visualizar os endpoints.

🛠️ Tecnologias Utilizadas

Linguagem: Java 17+

Framework Principal: Spring Boot 3

Acesso a Dados: Spring Data JPA / Hibernate

Segurança: Spring Security + JWT (JSON Web Tokens)

Banco de Dados: MySQL (Produção) / H2 Database (Testes locais)

Documentação da API: SpringDoc OpenAPI (Swagger)

Infraestrutura: Docker & Docker Compose

Gerenciador de Dependências: Maven

⚙️ Como Executar o Projeto

Pré-requisitos

Certifique-se de ter instalado em sua máquina:

Java JDK 17+

Maven

Docker e Docker Compose (Opcional, mas recomendado)

Opção 1: Executando com Docker (Recomendado)

A maneira mais rápida de rodar a aplicação e o banco de dados é utilizando o Docker.

Clone o repositório:

git clone [https://github.com/SeuUsuario/seu-repositorio-portfolio.git](https://github.com/SeuUsuario/seu-repositorio-portfolio.git)
cd seu-repositorio-portfolio


Suba os containers com o Docker Compose:

docker-compose up -d


A API estará disponível em http://localhost:8080.

Opção 2: Executando Localmente (Maven)

Clone o repositório e acesse a pasta do projeto.

Certifique-se de configurar as credenciais do seu banco de dados MySQL no arquivo src/main/resources/application.properties ou application.yml.

Execute o comando Maven para rodar a aplicação:

mvn spring-boot:run


📖 Documentação da API (Swagger)

Com a aplicação rodando, você pode acessar a documentação interativa da API e testar os endpoints diretamente pelo navegador acessando:

👉 http://localhost:8080/swagger-ui.html

Principais Endpoints Públicos

GET /api/projects - Retorna a lista de todos os projetos.

GET /api/projects/{id} - Retorna os detalhes de um projeto específico.

GET /api/skills - Retorna a lista de habilidades.

GET /api/experiences - Retorna o histórico profissional.

Endpoints Protegidos (Requer Token JWT)

POST /api/projects - Adiciona um novo projeto.

PUT /api/projects/{id} - Atualiza um projeto existente.

DELETE /api/projects/{id} - Remove um projeto.
