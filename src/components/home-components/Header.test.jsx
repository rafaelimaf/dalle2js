import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import App from '../../App';
import '@testing-library/jest-dom';

describe('Testa o componente Header.jsx, verificando se', () => {
  it('o componente é renderizado corretamente na rota "/"', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const headerComponent = getByTestId('header-component');

    expect(headerComponent).toBeInTheDocument();
  });

  it('o componente possui um título com a tag "h1" e um subtítulo com a tag h5', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const titleElement = getByTestId('header-title');
    const subtitleElement = getByTestId('header-subtitle');

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  it('o componente possui um botão com o texto "Descubra!"', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const buttonElement = getByTestId('header-getting-started-btn');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toEqual('Descubra!');
  });

  it('ao clicar no botão "Descubra!" a página é rola até a seção "Antes de Começar"', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const buttonElement = getByTestId('header-getting-started-btn');

    fireEvent.click(buttonElement);

    expect(window.location.hash).toBe('#getting-started');
  });
});
