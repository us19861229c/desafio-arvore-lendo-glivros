import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Livro from '../Livro';
import Carregando from '../Carregando';

export default function Prateleira({ titulo }) {
  const [taCarregando] = useState(false);
  return (
    taCarregando
      ? <Carregando />
      : (
        <div>
          <h2>
            {titulo}
          </h2>
          <Livro />
        </div>
      )
  );
}

Prateleira.propTypes = {
  titulo: PropTypes.string.isRequired,
};
