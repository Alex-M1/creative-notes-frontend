import { createGlobalStyle } from 'styled-components';

export const StGlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    -webkit-text-stroke: 0.1px black;
  }
  body {
    height: ${window.innerHeight}px;
    overflow: hidden;
    background: url(../assets/img/night.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff
  }
  #root{
    height: 100%;
  }
  a{
    text-decoration: none;
  }
`;
