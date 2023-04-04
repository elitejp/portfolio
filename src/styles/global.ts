import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
    text-decoration:none;
  }

  :root {
    --red0: #8C0810;
    --red100: #54080F;
    --red200: #41080F;
    --red300: #120000;

    --black0: #212529;
    --black100: #0A0A0A;
    --black200: #00070d;
    --black300: #000000;

    --white: #FFFFFF;

    --inter: 'Inter', sans-serif;
  }

  body {
    min-width: 100%;
    min-height: 100vh;
    background-color: var(--black200);
  }

  html{
    scroll-behavior: smooth;
  }

  button, div, label, select, h1, h2, h3, h4, h5, h6, input, nav, ul, li {
    font-family: var(--inter);
    color: var(--white);
  }
`;
