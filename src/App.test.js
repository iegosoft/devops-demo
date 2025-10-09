import { render, screen } from '@testing-library/react';
import App from './App';

test('verifica se o título principal é renderizado corretamente', () => {
  render(<App />);
  const titulo = screen.getByText(/Projeto DevOps - CI\/CD Demo/i);
  expect(titulo).toBeInTheDocument();
});

test('verifica se o nome do aluno está presente', () => {
  render(<App />);
  const nomeAluno = screen.getByText(/Iego Sérgio/i);
  expect(nomeAluno).toBeInTheDocument();
});
