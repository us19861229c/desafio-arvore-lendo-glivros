import React, { useContext, useState } from 'react';
import LerNaArvoreContext from '../../context/LerNaArvoreContext';

export default function Header() {
  const { setTermoBusca } = useContext(LerNaArvoreContext);
  const [temLupa, setTemLupa] = useState(true);
  const [localTermoBusca, setLocalTermoBusca] = useState('');

  const enviarTermoBusca = (evento) => {
    evento.preventDefault();
    setLocalTermoBusca(evento.target.value);
    setTermoBusca(localTermoBusca);
  };

  return (
    <header>
      {(
    temLupa
      ? (
        <span>
          Google livros
          <button type="button" onClick={() => setTemLupa(!temLupa)}>&#128269;</button>
        </span>
      )
      : (
        <form>
          <input
            type="text"
            placeholder="Buscar por livros ou autores"
            value={localTermoBusca}
            onChange={(evento) => setLocalTermoBusca(evento.target.value)}
            onKeyPress={(evento) => (evento.key === 'Enter' ? enviarTermoBusca(evento) : null)}
          />
          <span><button type="button" onClick={() => setTemLupa(!temLupa)}> x </button></span>
        </form>
      ))}
    </header>
  );
}
