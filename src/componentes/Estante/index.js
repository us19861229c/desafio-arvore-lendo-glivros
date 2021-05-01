import React, { useState } from 'react';
import LivrosPorBusca from '../LivrosPorBusca';
import Prateleira from '../Prateleira';

export default function Estante() {
  const [temLivrosFiltrados] = useState(true);
  return (
    temLivrosFiltrados
      ? (<LivrosPorBusca />)
      : (
        <>
          <Prateleira titulo="Aventura" />
          <Prateleira titulo="Infantil" />
          <Prateleira titulo="Destaque" />
          <Prateleira titulo="Ação" />
        </>
      )
  );
}
