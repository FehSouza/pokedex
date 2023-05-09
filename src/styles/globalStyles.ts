import { createGlobalStyle as css } from 'styled-components'

export const GlobalStyles = css`
  body {
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors['background-white']};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    color: ${({ theme }) => theme.colors['text-black']};
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    margin: 0;
    padding: 0;
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: ${({ theme }) => theme.colors['text-black']};
  }

  button,
  input,
  textarea {
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 0;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: ${({ theme }) => theme.colors['text-black']};
  }

  @media (max-width: 480px) {
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    button,
    input,
    textarea {
      font-size: 14px;
      line-height: 17px;
    }
  }

  button:hover {
    cursor: pointer;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors['text-black']};
  }

  a:hover {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors['background-pressed-input']};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors['background-modal']};
    border: none;
  }
`
