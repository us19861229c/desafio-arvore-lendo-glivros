import React from 'react';
import PropTypes from 'prop-types';

export default function Livro({ livroInfo }) {
  return (
    <div>
      <img
        src={livroInfo.volumeInfo.imageLinks === undefined
          ? ''
          : `${livroInfo.volumeInfo.imageLinks.thumbnail}`}
        alt={`capa do livro ${livroInfo.volumeInfo.title}`}
      />
      <p>{livroInfo.volumeInfo.title}</p>
    </div>
  );
}

Livro.propTypes = {
  livroInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
};
