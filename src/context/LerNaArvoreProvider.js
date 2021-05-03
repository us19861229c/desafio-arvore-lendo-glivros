import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LerNaArvoreContex from './LerNaArvoreContext';

function LerNaArvoreProvider({ children }) {
  const [termoBusca, setTermoBusca] = useState('');

  const valoresDoContexto = {
    termoBusca,
    setTermoBusca,

  };

  return (
    <LerNaArvoreContex.Provider value={{ ...valoresDoContexto }}>
      {children}
    </LerNaArvoreContex.Provider>
  );
}

LerNaArvoreProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    termoBusca: PropTypes.string,
    setTermoBusca: PropTypes.func,
  })).isRequired,
};

export default LerNaArvoreProvider;
