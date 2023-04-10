import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  *:before,
  *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
    color: #ffffff;
  font-family: 'StratosSkyeng', sans-serif;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  a,
  a:visited {
  text-decoration: none;
  cursor: pointer;
  }

  button,
  ._btn {
  cursor: pointer;
  }
  ul li {
    list-style: none;
  }
  
  @font-face {
    font-weight: 400;
    font-style: normal;
  }
`

export default GlobalStyle
