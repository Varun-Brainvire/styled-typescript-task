import React from "react";
import "./App.css";
import GlobalStyles from "./Components/Styles/Global";
import styled from "styled-components";
import {
  CardDiv,
  ChildOne,
  ChildTwo,
  FormContainer,
  ParentDiv,
  Input,
  H1,
  Button,
  H3,
  Icon,
  H4,
  InputContainer,
  DivContainer,
  Icon2,
  Icon3,
  Signin,
  StyledButton,
  Google,
  ButtonContainer,
  Facebook,
} from "./Components/Styles/Card.styled";
import Image from "./Components/Styles/Image.styled";
import image from "./Components/Styles/illustration-your-users.svg";
import arr from "./content";
import { FaUserAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <div className="App">
      <GlobalStyles theme={theme} />
      <FormContainer>
        <CardDiv>
          <ParentDiv>
            <ChildOne>
              <Image src={image} />
            </ChildOne>
            <ChildTwo>
              <H1>Student SignUp</H1>
              <H4>Hey Enter Your Details To Create Your Account</H4>

              <DivContainer >
              <InputContainer>
                <Icon />
                <Input placeholder="Enter your Name" type="text" />
              </InputContainer>
              <InputContainer>
              <Icon />
                <Input placeholder="Enter Email" />
              </InputContainer>
              <InputContainer>
              <Icon2 />
                <Input placeholder="Enter Your Phone Number" />
              </InputContainer>
              <InputContainer>
              <Icon3 />
                <Input placeholder="Create Password" />
              </InputContainer>
              </DivContainer>
              <Button>Sign Up</Button>
              <H3>Or Signup with</H3>

              <ButtonContainer>
              <StyledButton>
                <Google />
              </StyledButton>


              <StyledButton>
                <Facebook />
              </StyledButton>

              </ButtonContainer>

              <H3>Already have an account? <span>Sign In</span></H3>


            </ChildTwo>
          </ParentDiv>
        </CardDiv>
      </FormContainer>
    </div>
  );
}

export default App;
