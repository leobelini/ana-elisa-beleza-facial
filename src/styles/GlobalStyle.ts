import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    line-height: 1.6;
    color: #1E1E1E;
    background-color: #FAF8F6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    font-family: inherit;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    line-height: 1.2;
  }

  /* Smooth scroll para navegação âncora */
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px; /* Compensa a navbar fixa */
  }

  /* Estilo para foco acessível */
  :focus {
    outline: 2px solid #C8A968;
    outline-offset: 2px;
  }

  /* Remove outline para mouse clicks mas mantém para teclado */
  :focus:not(:focus-visible) {
    outline: none;
  }
`;
