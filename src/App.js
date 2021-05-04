import React from 'react';

import LerNaArvoreProvider from './context/LerNaArvoreProvider';

import Inicio from './pages/Inicio';

function App() {
  return (
    <LerNaArvoreProvider>
      <Inicio />
    </LerNaArvoreProvider>
  );
}

export default App;
