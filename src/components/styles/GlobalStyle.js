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
  }
  body {
    background-color: white;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
  }
  #root {
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
  * {
  scrollbar-width: thin;
  scrollbar-color: #363636 #5aa4b2 ;
}
`

export default GlobalStyle
