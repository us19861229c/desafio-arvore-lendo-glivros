import React from 'react';

import LerNaArvoreProvider from './context/LerNaArvoreProvider';

import Estante from './componentes/Estante';
import Header from './componentes/Header';

function App() {
  return (
    <LerNaArvoreProvider>
      <Header />
      <Estante />
    </LerNaArvoreProvider>
  );
}

export default App;
