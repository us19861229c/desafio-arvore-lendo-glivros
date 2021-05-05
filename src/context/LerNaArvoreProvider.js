import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LerNaArvoreContex from './LerNaArvoreContext';

function LerNaArvoreProvider({ children }) {
  const [termoBusca, setTermoBusca] = useState('');
  const [taCarregando, setTaCarregando] = useState(true);
  const [temLivrosFiltrados, setTemLivrosFiltrados] = useState(false);

  const valoresDoContexto = {
    termoBusca,
    setTermoBusca,
    taCarregando,
    setTaCarregando,
    temLivrosFiltrados,
    setTemLivrosFiltrados,
  };

  return (
    <LerNaArvoreContex.Provider value={{ ...valoresDoContexto }}>
      {children}
    </LerNaArvoreContex.Provider>
  );
}

LerNaArvoreProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default LerNaArvoreProvider;
