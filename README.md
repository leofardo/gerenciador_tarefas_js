# Sistema de Gerenciador de Tarefas com Node JS, React e MySQL  

Sistema de Gerenciador de Tarefas feito completamente com Javascript no back-end (Node JS), front-end (React) e banco de dados MySQL

### Configuração do site.

Para configuração do site só seguir os passos abaixo:

1. Irá instalar as dependências 'node_modules', uma dentro da pasta cliente e outra dentro da pasta server.

2. Irá precisar criar um banco de dados e uma tabelas utilizando MySQL Workbench. O SQL para criação do banco de dados e a tabela está no arquivo 'sql.sql' dentro da pasta server

3. Na pasta 'server' irá criar um arquivo chamado .env, nele terá as informações de acesso ao banco de dados. Código para o arquivo .env abaixo, só alterar os "xxxxx" pelos dados:

`# MYSQL`

`DB_HOST = xxxxx`

`DB_USER = xxxxx`

`DB_PASSWORD = xxxxx`

`DB_DATABASE = xxxxx`

`DB_DATABASE = xxxxx`

`DB_TABELA = xxxxx`

5. Logo após irá abrir um terminal CMD apontado para a pasta 'server' e outro CMD apontado para a pasta 'cliente' e irá dar um 'npm start' nos dois para iniciar a aplicação.

### Funcionalidades

Basicamente tem as opções de poder adicionar textos no máximo com 70 caracteres, podendo excluir ou editar as tarefas.