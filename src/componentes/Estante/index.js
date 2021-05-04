import React, { useContext, useEffect, useState } from 'react';
import LivrosPorBusca from '../LivrosPorBusca';
import Prateleira from '../Prateleira';

import buscarLivrosPorTemas from '../../services/buscarLivrosPorTema';
import LerNaArvoreContext from '../../context/LerNaArvoreContext';

export default function Estante() {
  const {
    termoBusca,
    setTaCarregando,
    temLivrosFiltrados,
    setTemLivrosFiltrados,
  } = useContext(LerNaArvoreContext);
  const [livrosFiltrados, setLivrosFiltrados] = useState([]);
  const [livrosPadrao, setLivrosPadrao] = useState([]);
  const [livrosDestaque, setLivrosDestaque] = useState([]);

  const iniciandoPadrao = () => {
    const buscarLivrosPrateleiras = async () => {
      const livrosPrateleiraPadrao = await buscarLivrosPorTemas('aventura');
      setLivrosPadrao(livrosPrateleiraPadrao);
      const livrosPrateleiraDestaque = await buscarLivrosPorTemas('chocolate');
      setLivrosDestaque(livrosPrateleiraDestaque);
    };
    buscarLivrosPrateleiras();
  };

  const listaInicialEstante = [
    { titulo: 'Aventura', dados: livrosPadrao },
    { titulo: 'Infantil', dados: livrosPadrao },
    { titulo: 'Destaque', dados: livrosDestaque },
    { titulo: 'Ação', dados: livrosPadrao },
  ];

  useEffect(() => {
    setTimeout(() => setTaCarregando(false), 2000);
    iniciandoPadrao();
  }, []);

  useEffect(() => {
    if (termoBusca !== '') {
      const buscarLivrosPorTermo = async () => {
        const livrosPorBusca = await buscarLivrosPorTemas(termoBusca, 12);
        setLivrosFiltrados(livrosPorBusca);
      };
      buscarLivrosPorTermo();
      setTemLivrosFiltrados(true);
    }
  }, [termoBusca]);

  return (
    temLivrosFiltrados
      ? (<LivrosPorBusca livrosInfo={livrosFiltrados} />)
      : (
        <>
          {listaInicialEstante.map(({ titulo, dados }) => (
            <Prateleira titulo={titulo} livrosInfo={dados} />
          ))}
        </>
      )
  );
}
