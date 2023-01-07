import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@jest/globals';
import '@testing-library/jest-dom';
import App from './App';

test('Testa se o arquivo App.jsx ao redirecionar para a rota "/" renderiza o Componente Home.jsx', () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  const homeComponent = getByTestId('home-page');

  expect(homeComponent).toBeInTheDocument();
});

test('Testa se o arquivo App.jsx ao redirecionar para a rota "/search" renderiza o Componente Search.jsx', async () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={['/search']}>
      <App />
    </MemoryRouter>,
  );

  const searchComponent = getByTestId('search-page');

  expect(searchComponent).toBeInTheDocument();
});
