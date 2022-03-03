import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    word-wrap: break-word;
  }
  html {
    font-size: 62.5%;
    line-height: 1.6;
    height: 100%;
  }
  body {
    background-color: white;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
    width: 100%;
  }
  button,
  input, 
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }
  button {
    cursor: pointer;
  }
`

export default GlobalStyle
