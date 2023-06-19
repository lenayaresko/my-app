import styled, { createGlobalStyle } from 'styled-components'

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
export const Main = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`

export default GlobalStyle
