# Projeto: Formulário Interativo com Persistência Local

Este projeto consiste em um formulário HTML dinâmico que utiliza JavaScript para interagir com um servidor backend construído com Node.js e Express. Os dados do formulário são persistidos localmente usando um banco de dados HeidiSQL.

## Tecnologias Utilizadas

* **Frontend:** HTML, JavaScript
* **Backend:** Node.js, Express
* **Comunicação Frontend-Backend:** Fetch API
* **Banco de Dados:** HeidiSQL (local)

## Visão Geral

O frontend apresenta um formulário HTML para o usuário inserir dados. Ao submeter o formulário, o JavaScript no frontend (utilizando a Fetch API) envia os dados para o servidor Node.js/Express. O servidor, por sua vez, recebe esses dados e os armazena no banco de dados local HeidiSQL.

## Pré-requisitos

Antes de executar o projeto, você precisará ter instalado:

* **Node.js:** Para executar o servidor backend. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).
* **npm** (ou yarn): Gerenciador de pacotes que vem com o Node.js.
* **HeidiSQL:** Para configurar e visualizar o banco de dados local. Você pode baixá-lo em [https://www.heidisql.com/](https://www.heidisql.com/).

## Configuração do Banco de Dados (HeidiSQL)

1.  Abra o HeidiSQL.
2.  Crie uma nova conexão com o seu servidor local (geralmente `localhost`).
3.  Crie um novo banco de dados para o projeto (por exemplo, `formulario_db`).
4.  Crie uma tabela dentro deste banco de dados para armazenar os dados do formulário. Defina as colunas necessárias (por exemplo, `id`, `name`, `date`, `email`, `password`). Certifique-se de definir um tipo de dado apropriado para cada coluna e, possivelmente, uma chave primária auto-incrementável.
