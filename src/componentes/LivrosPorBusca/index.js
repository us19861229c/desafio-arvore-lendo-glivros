import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Livro from '../Livro';

export default function LivrosPorBusca({ livrosInfo }) {
  return (
    <PrateleiraLivros>
      {livrosInfo && livrosInfo.map((livroInfo) => (
        <Livro key={livroInfo.id} livroInfo={livroInfo} />
      ))}
    </PrateleiraLivros>
  );
}

LivrosPorBusca.propTypes = {
  livrosInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const PrateleiraLivros = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 margin: 10px 5px;

 img {
    width:  94px;
    height: 138px;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100px ;
    max-width: 200px;
    display: block;/* or inline-block */
    word-wrap: break-word;
    max-height: 2em;
    line-height: 1em;
    white-space: normal;
  }
`;
