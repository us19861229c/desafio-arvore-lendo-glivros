import React, { useContext, useEffect, useState } from 'react';
import LivrosPorBusca from '../LivrosPorBusca';
import Prateleira from '../Prateleira';

import buscarLivrosPorTemas from '../../services/buscarLivrosPorTema';
import LerNaArvoreContext from '../../context/LerNaArvoreContext';

export default function Estante() {
  const { termoBusca } = useContext(LerNaArvoreContext);
  const [temLivrosFiltrados, setTemLivrosFiltrados] = useState(false);
  const [livrosFiltrados, setLivrosFiltrados] = useState([]);
  const [livrosAventura, setLivrosAventura] = useState([]);
  const [livrosAcao, setLivrosAcao] = useState([]);
  const [livrosDestaque, setLivrosDestaque] = useState([]);
  const [livrosInfantil, setLivrosInfantil] = useState([]);

  const iniciandoPadrao = () => {
    const buscarLivrosPrateleiras = async () => {
      const livrosPrateleiraAventura = await buscarLivrosPorTemas('aventura');
      setLivrosAventura(livrosPrateleiraAventura);
      const livrosPrateleiraAcao = await buscarLivrosPorTemas('acao');
      setLivrosAcao(livrosPrateleiraAcao);
      const livrosPrateleiraDestaque = await buscarLivrosPorTemas('chocolate');
      setLivrosDestaque(livrosPrateleiraDestaque);
      const livrosPrateleiraInfantil = await buscarLivrosPorTemas('infantil');
      setLivrosInfantil(livrosPrateleiraInfantil);
    };
    buscarLivrosPrateleiras();
  };

  useEffect(() => {
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
          <Prateleira titulo="Aventura" livrosInfo={livrosAventura} />
          <Prateleira titulo="Infantil" livrosInfo={livrosInfantil} />
          <Prateleira titulo="Destaque" livrosInfo={livrosDestaque} />
          <Prateleira titulo="Ação" livrosInfo={livrosAcao} />
        </>
      )
  );
}
