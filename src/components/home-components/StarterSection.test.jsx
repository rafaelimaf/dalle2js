import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import StarterSection from './StarterSection';

describe('Testa o componente StarterSection.sjx, verificando se', () => {
  it('ao renderizar o componente App.jsx na rota "/" o componente está presente', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const starterSectionComponent = getByTestId('starter-section-component');

    expect(starterSectionComponent).toBeInTheDocument();
  });

  it('o componente possui uma tag "h2" com o texto "Antes de Começar"', () => {
    const { getAllByTestId } = render(
      <StarterSection />,
    );

    const contentHeadingElement = getAllByTestId('starter-section-component-heading');

    expect(contentHeadingElement.length).toEqual(1);
  });

  it('o componente possui três tags "p" e uma tag "img"', () => {
    const { getAllByTestId } = render(
      <StarterSection />,
    );

    const pElements = getAllByTestId('starter-section-component-paragraph');
    const imgElement = getAllByTestId('starter-section-component-img');

    expect(pElements.length).toEqual(3);
    expect(imgElement.length).toEqual(1);
  });
});
