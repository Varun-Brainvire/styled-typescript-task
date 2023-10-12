import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card";
import GlobalStyles from "./Components/Styles/Global";
import FormContainer from "./Components/Styles/Card.styled";
import Image from "./Components/Styles/Image.styled";
import image from "./Components/Styles/illustration-your-users.svg";
import { H1, P } from "./Components/Styles/Heading.styled";
import { Input } from "./Components/Styles/Input.styled";
import arr from "./content";
import styled from "styled-components";
import { Button } from "./Components/Styles/Button.styled";

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
      <div style={{ border: '2px solid green' }}>
      {/* <FormContainer theme={theme} />
      <Image src={image} theme={theme} />
      <H1 theme={theme}>Student Signup</H1>
      <P theme={theme}>Enter your details to create your account</P>
      {/* <InputContainer>
        <Input placeholder='Enter Name'/>
        <Input placeholder='Enter Name'/> 
      </InputContainer> */}
      <div>
        {arr.map((item, index) => {
          return <Input placeholder={item.text} id={index} />;
        })}
      </div> 
      {/* <Input placeholder='Enter Name'/> */}
      {/* <Input placeholder='Enter Name'/> */}
      <Button theme={theme}>Sign Up</Button>
      </div>
    </div>
  );
}

export default App;
