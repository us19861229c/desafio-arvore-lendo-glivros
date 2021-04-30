# Desafio Arvore :tree: - Lendo API Google Livros :books: 

## Objetivo

Usando a API de Busca de Livros do Google, o candidato deve criar uma aplicação web responsiva em react baseada nesse layout ` https://marvelapp.com/5i92h5d` .

Crie uma conta free no Figma e subir esse arquivo para ter acesso ao layout.

As prateleiras da tela inicial são resultados de busca pelo título da prateleira, por exemplo, tomando o layout proposto teríamos 4 chamadas diferentes para a API.

Desconsiderar a parte de Filtros do layout.


### API 

`https://www.googleapis.com/books/v1/volumes?q=Query&startIndex=0&maxResults=10`


**Onde:**

q - Termo a ser buscado. Ex: Aventura

startIndex - A posição de partida dentro da lista, default é 0.

maxResults - O número máximo de resultados. O default é 10, e o valor máximo permitido é 40.


## Requisitos mínimos:

- Documentação do repositório git

- Histórico de commits

- React

- Boas práticas

- Reproduzir fielmente o layout

- Estilização baseada em CSS-IN-JS, exemplo: Styled Component
  
## Requisitos desejáveis:

- Testes unitários

- React Hooks

- Paginação dos resultados