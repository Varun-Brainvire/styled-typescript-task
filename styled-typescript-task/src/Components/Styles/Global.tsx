import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Open+Sans');
body {
  background: #88a9f0;
    color: hsl(192, 100%, 9%);
    font-family: 'Open Sans', sans-serif; 
    margin: 0;

    @media only screen and (max-width: 600px) {
  body {
      height: auto;
  }
}
  }
`;

export default GlobalStyles;
