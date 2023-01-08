import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';

describe('Testa o componente App.jsx se:', () => {
  it('ao ser redirecionado para a rota "/" renderiza o Componente Home.jsx', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const homeComponent = getByTestId('home-page');

    expect(homeComponent).toBeInTheDocument();
  });

  it('ao ser redirecionado para a rota "/search" renderiza o Componente Search.jsx', async () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/search']}>
        <App />
      </MemoryRouter>,
    );

    const searchComponent = getByTestId('search-page');

    expect(searchComponent).toBeInTheDocument();
  });
});
