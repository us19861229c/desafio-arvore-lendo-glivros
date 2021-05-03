const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const buscarLivrosPorTema = async (tema, maxRes = 3) => {
  const resposta = await fetch(`${BASE_URL}${tema}&startIndex=0&maxResults=${maxRes}`);
  const resultados = await resposta.json();
  return resultados.items;
};

export default buscarLivrosPorTema;
