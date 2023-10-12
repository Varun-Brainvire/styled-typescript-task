import styled from "styled-components";
import image from './illustration-your-users.svg'

const Image = styled.img`   
width: 500px;
top: 18%;
left: 14%;
height: 457px;

@media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
export default Image