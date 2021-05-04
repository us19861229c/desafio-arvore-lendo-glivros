import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Livro({ livroInfo }) {
  return (
    <ExibirLivro>
      <img
        src={livroInfo.volumeInfo.imageLinks === undefined
          ? ''
          : `${livroInfo.volumeInfo.imageLinks.thumbnail}`}
        alt="capa do livro"
      />
      <p>{livroInfo.volumeInfo.title}</p>
    </ExibirLivro>
  );
}

Livro.propTypes = {
  livroInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ExibirLivro = styled.div`
  img {
    margin: 5px 0;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`;
