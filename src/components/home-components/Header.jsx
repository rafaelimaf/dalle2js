import React from 'react';
import '../../styles/components/header.css';

export default function Header() {
  return (
    <header className="header-container" data-testid="header-component">
      <h1 className="header-title" data-testid="header-title">DALL-E 2 .JS</h1>
      <h5 className="header-subtitle" data-testid="header-subtitle">
        Crie imagens a partir da Inteligência Artificial Dall-E 2, desenvolvida
        pela OpenAI e disponibilizada como API, aqui consumida numa aplicação front-end e
        desenvolvida em Javascript e React.js.
      </h5>
      <button
        className="header-btn"
        type="button"
        data-testid="header-getting-started-btn"
        onClick={() => { window.location.hash = '#getting-started'; }}
      >
        Descubra!
      </button>
    </header>
  );
}
