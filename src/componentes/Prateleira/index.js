import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Livro from '../Livro';
import Carregando from '../Carregando';

export default function Prateleira({ titulo, livrosInfo }) {
  const [taCarregando] = useState(false);
  return (
    taCarregando
      ? <Carregando />
      : (
        <div>
          <h2>
            {titulo}
          </h2>
          {livrosInfo && livrosInfo.map((livroInfo) => (
            <Livro key={livroInfo.id} livroInfo={livroInfo} />
          ))}
        </div>
      )
  );
}

Prateleira.propTypes = {
  titulo: PropTypes.string.isRequired,
  livrosInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};
