import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  .font-sora {
    font-family: "Sora", sans-serif;
  }

  .font-logo {
    font-family: "Slackey", sans-serif;
    font-size: 20px;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
  }

  ul {
    list-style-type: none;
  }
  
  a {
    color: #000;
  }
  
  h1,
  h2, 
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    line-height: 120%;
  }
  
  h1 {
    font-size: 56px;
  }

  h2 {
    font-size: 48px;
  }

  h3 {
    font-size: 40px;
  }

  h4 {
    font-size:24px;
  }

  h5 {
    font-size: 18px;
  }
  
  p {
    line-height: 150%;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 36px;
    }

    h3 {
      font-size: 30px;
    }
  }

`;

export default GlobalStyle;
