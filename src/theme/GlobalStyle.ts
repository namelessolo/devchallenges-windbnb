import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  input, button {
    font-size: inherit;
    font-family:inherit;
    font-weight: inherit;
    color: inherit;
  }
`;

export default GlobalStyle;
