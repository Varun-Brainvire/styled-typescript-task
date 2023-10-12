import styled from "styled-components";
import image from './illustration-your-users.svg'

const FormContainer = styled.div`

    // background-image:url(${image});
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  height: 80vh;
  width: 80%;
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }

`

export default FormContainer;
