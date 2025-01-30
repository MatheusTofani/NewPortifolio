import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        font-family: 'Montserrat', sans-serif;

        @media (max-width: 768px) {
   overflow-x: hidden;
  }
    }

    body {
        background-color: #0f0821;
    }
`;
