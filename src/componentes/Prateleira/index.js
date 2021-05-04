import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Livro from '../Livro';

import tituloPrateleira from '../../assets/img/titulo.png';
import livroCarregando from '../../assets/img/livro.png';

import LerNaArvoreContext from '../../context/LerNaArvoreContext';

export default function Prateleira({ titulo, livrosInfo }) {
  const { taCarregando } = useContext(LerNaArvoreContext);
  return (
    <PrateleiraLivros>
      {taCarregando
        ? (
          <PrateleiraCarregando>
            <img src={tituloPrateleira} alt="imagem carregando" />
          </PrateleiraCarregando>
        )
        : (
          <div>
            <h2>{titulo}</h2>
            <FileiraLivros>
              {livrosInfo && livrosInfo.map((livroInfo) => (
                <Livro key={livroInfo.id} livroInfo={livroInfo} />
              ))}
            </FileiraLivros>
          </div>
        )}
    </PrateleiraLivros>
  );
}

Prateleira.propTypes = {
  titulo: PropTypes.string.isRequired,
  livrosInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const PrateleiraCarregando = styled.div`
  background-image: url(${livroCarregando});
  background-position: right 26px;
  background-repeat: space;
  height: 219px;

  img {
    width: auto;
  }
`;

const FileiraLivros = styled.div`
  display: flex;
  margin-top: 5px;

  img {
    width: 93px;
    height: 138px;
  }
`;

const PrateleiraLivros = styled.div`
  margin-bottom: 8px;
  padding: 10px;
  height: 219px;

  &:nth-last-child(2) {
   background-color: #47B7ED;
   color: #FFFFFF;
    & p {
      color: #FFFFFF;
    }
    & img {
      border-bottom-left-radius: 25px;
    }
 } 
`;
