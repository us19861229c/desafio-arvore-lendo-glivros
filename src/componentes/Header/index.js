import React, {
  useContext, useState, useRef, useEffect,
} from 'react';
import styled from 'styled-components';

import LerNaArvoreContext from '../../context/LerNaArvoreContext';

import logoGoogle from '../../assets/img/logo.png';
import lupa from '../../assets/img/lupa.png';
import voltar from '../../assets/img/voltar.png';

export default function Topo() {
  const { setTermoBusca, temLivrosFiltrados } = useContext(LerNaArvoreContext);
  const [mostraBusca, setMostraBusca] = useState(false);
  const [localTermoBusca, setLocalTermoBusca] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    if (mostraBusca) {
      inputRef.current.focus();
    }
  }, [mostraBusca]);

  const enviarTermoBusca = (evento) => {
    evento.preventDefault();
    setLocalTermoBusca(evento.target.value);
    setTermoBusca(localTermoBusca);
  };

  return (
    <>
      {
        temLivrosFiltrados
          ? (
            <Header>
              <a href="http:/">
                <img src={voltar} alt="icone de voltar" />
              </a>
              <h1>Resultado de busca</h1>
            </Header>
          )
          : (
            <Header>
              <img src={logoGoogle} alt="logo da google" />
              <button type="submit" onClick={() => setMostraBusca(!mostraBusca)}>
                <img src={lupa} alt="icone de lupa" />
              </button>
            </Header>
          )
      }
      { mostraBusca && !temLivrosFiltrados
        ? (
          <Formulario>
            <input
              type="text"
              placeholder="Buscar por livros ou autores"
              value={localTermoBusca}
              onChange={(evento) => setLocalTermoBusca(evento.target.value)}
              onKeyPress={(evento) => (evento.key === 'Enter' ? enviarTermoBusca(evento) : null)}
              onBlur={() => setMostraBusca(false)}
              ref={inputRef}
            />
          </Formulario>
        )
        : (null)}
    </>
  );
}

const Header = styled.header`
  background-color: #EFFAFF;
  padding: 18px 1rem;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;

  h1 {
    color: #86878B;
    font-size: 1rem;
    font-weight: bold;
    position: relative;
    left: -80px;
  }

  a {
    top: 4px;
    position: relative;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const Formulario = styled.form`
  input { 
    left: 0;
    padding: 20px 1rem 30px;
    position: absolute;
    top: 0;
    width: calc(320px - 2rem);
    overflow: hidden;

    border: none;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.06);

    color: #B2B4B9;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;

    &::placeholder,
    &::-webkit-input-placeholder {
      color: rgba( 89, 90, 92, .5);
    }
  }

`;
