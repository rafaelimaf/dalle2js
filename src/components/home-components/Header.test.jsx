import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import 'jest';
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
      <MemoryRouter initialEntries={['/']}>
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
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const buttonElement = getByTestId('header-getting-started-btn');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toEqual('Descubra!');
  });

  it('após clicar no botão "Descubra!" há uma rolagem na página', () => {
    const scrollToMock = jest.fn();
    jest.spyOn(window, 'scrollTo').mockImplementation(scrollToMock);

    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const buttonElement = getByTestId('header-getting-started-btn');
    const targetElement = document.getElementById('getting-started');

    fireEvent.click(buttonElement);
    expect(scrollToMock).toHaveBeenCalled();
    expect(scrollToMock).toHaveBeenCalledWith({ top: targetElement.offsetTop });
  });
});
