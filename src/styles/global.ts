import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    background: #ebe8e3;  
    display: flex;
    align-items: center;
  }

  body, input, button {
    font: 16px Nunito, sans-serif;
    color: #fff;
  }

  #root {
    min-width: 380px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;
