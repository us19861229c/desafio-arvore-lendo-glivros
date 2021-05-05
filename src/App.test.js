import React from 'react';
import {
  render, screen, fireEvent, getByRole,
} from '@testing-library/react';
import App from './App';

describe('1. testa a renderização da página inicial', () => {
  test('testa a existência dos títulos das divs', () => {
    render(<App />);
    setTimeout(() => {
      const tituloAventura = screen.getByText(/Aventura/i);
      expect(tituloAventura).toBeInTheDocument();
      const tituloInfantil = screen.getByText(/Infantil/i);
      expect(tituloInfantil).toBeInTheDocument();
      const tituloDestaque = screen.getByText(/Destaque/i);
      expect(tituloDestaque).toBeInTheDocument();
      const tituloAcao = screen.getByText(/Acao/i);
      expect(tituloAcao).toBeInTheDocument();
    }, 1000);
  });

  test('testa se a div Destaque tem Bg #47B7ED', () => {
    render(<App />);
    setTimeout(() => {
      const tituloDestaque = screen.getByText(/Destaque/i);
      expect(tituloDestaque.style.backgroundColor).toBe('#47B7ED');
    }, 1000);
  });

  test('testa se ao clicar na lupa o input é renderizado', () => {
    render(<App />);
    setTimeout(() => {
      const lupa = getByRole('img', { name: /icone da lupa/i });
      fireEvent.click(lupa);
      expect('Buscar por livros ou autores').toBeInTheDocument();
    });
  });

  test('testa se ao clicar fora do input a lupa volta a ser renderizada', () => {
    render(<App />);
    setTimeout(() => {
      const lupa = getByRole('img', { name: /icone da lupa/i });
      fireEvent.click(lupa);
      expect('Buscar por livros ou autores').toBeInTheDocument();
      const capaLivro = getByRole('img', { name: /capa do livro/i });
      fireEvent.click(capaLivro);
      expect(lupa).toBeInTheDocument();
    });
  });
});
