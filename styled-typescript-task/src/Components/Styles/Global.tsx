import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body {
    background: #88a9f0;
    color: hsl(192, 100%, 9%);
    margin: 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  
`

export default GlobalStyles