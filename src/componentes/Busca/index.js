import React, { useState } from 'react';

export default function Busca() {
  const [temLupa] = useState(true);
  return (
    temLupa
      ? <span><button type="button">Lupa &#128269;</button></span>
      : (
        <form>
          <input type="text" placeholder="Buscar por livros ou autores" />
        </form>
      )
  );
}
