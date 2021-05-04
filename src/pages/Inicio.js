import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import reset from 'styled-reset';

import Estante from '../componentes/Estante';
import Topo from '../componentes/Header';

export default function Inicio() {
  return (
    <>
      <GlobalStyle />
      <Topo />
      <Estante />
    </>

  );
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}

  body {
    font-family: 'Roboto', sans-serif;
  }

  div#root {
    margin: 0 auto;
    max-width: 320px;
    position: relative;

    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 22px;
    font-weight: 500;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: #595A5C;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100px ;
    max-width: 200px;
    display: block;/* or inline-block */
    word-wrap: break-word;
    max-height: 2.4em;
    line-height: 1.2em;
    white-space: normal;
  }
`;
