import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    text-align: left;
    line-height: 1.5;
    color: #000000;
    background-color: #FFFFFF;
  }
  
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
