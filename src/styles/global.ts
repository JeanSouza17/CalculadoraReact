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
    background: #67B26F;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #4ca2cd, #67B26F);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #4ca2cd, #67B26F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    align-items: center;
  }

  body, input, button {
    font: 16px Nunito, sans-serif;
    color: #000000;
  }

  #root {
    width: 380px;
    margin: 0 auto;
    padding: 20px 20px;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;
