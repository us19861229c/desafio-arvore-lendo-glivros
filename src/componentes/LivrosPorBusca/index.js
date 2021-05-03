import React from 'react';
import PropTypes from 'prop-types';
import Livro from '../Livro';

export default function LivrosPorBusca({ livrosInfo }) {
  return (
    <div>
      {livrosInfo && livrosInfo.map((livroInfo) => (
        <Livro key={livroInfo.id} livroInfo={livroInfo} />
      ))}
    </div>
  );
}

LivrosPorBusca.propTypes = {
  livrosInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};
