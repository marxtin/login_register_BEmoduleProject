import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: white;
    color: ${({ theme }) => theme.text};
   
    min-height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
    font-family: Quicksand;
   
  }

  #root {
   
    display: flex;
    flex-direction: column;
  }

 
  
 `;
