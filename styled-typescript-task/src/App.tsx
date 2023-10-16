import React, { useState } from "react";
import "./App.css";
import GlobalStyles from "./Components/Styles/Global";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

interface values {
  name: string;
  email: string;
  phone: string;
  password: string;
}

function App() {
  const [values, setValues] = useState<values>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [formSubmittion, setFormSubmittion] = useState(false);

  console.log(values);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
    setValues({ ...values, [name]: value });
    console.log(name);
  };

  const handleFormCheck = () => {
    console.log(values.email);

    //Validation for Name

    if (values.name == "") {
      toast.success("Name Field should not be empty", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setFormSubmittion(false);
    }

    //Validation for Email

    let re =
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';

    if (/\S+@\S+\.\S+/.test(values.email) && values.email != "") {
      // alert("done");
      setFormSubmittion(true);
    } else {
      toast.error("Email not entered in proper format eg :adam@gmail.com ");
      setFormSubmittion(false);
    }

    //Validation for Phone

    if (/^\d{10}$/.test(values.phone) && values.phone != "") {
      // alert("phone done");
      setFormSubmittion(true);
    } else {
      toast.error("Enter proper phone number");
      setFormSubmittion(false);
    }

    //Validation for Password

    if (
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(values.password) &&
      values.password != ""
    ) {
      // alert("password done");
      setFormSubmittion(true);
    } else {
      toast.error("wrong password");
      setFormSubmittion(false);
    }

    //For main form submission

    if (
      Object.values(values).every((item) => item != "") &&
      formSubmittion == true
    ) {
      toast.success("Form Submitted");
    } else {
      setFormSubmittion(false);
      toast.error("Error in form submission");
    }
  };
  return (
    <div className="App">
      <ToastContainer />
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

              <DivContainer>
                <InputContainer>
                  <Icon />
                  <Input
                    required
                    placeholder="Enter your Name"
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                  />
                </InputContainer>
                <InputContainer onChange={handleInputChange}>
                  <Icon />
                  <Input
                    required
                    placeholder="Enter Email"
                    name="email"
                    type="email"
                  />
                </InputContainer>
                <InputContainer onChange={handleInputChange}>
                  <Icon2 />
                  <Input
                    required
                    placeholder="Enter Your Phone Number"
                    name="phone"
                  />
                </InputContainer>
                <InputContainer type="password" onChange={handleInputChange}>
                  <Icon3 />
                  <Input
                    required
                    placeholder="Create Password"
                    name="password"
                    type="password"
                  />
                </InputContainer>
              </DivContainer>
              <Button onClick={handleFormCheck}>Sign Up</Button>
              <H3>Or Signup with</H3>

              <ButtonContainer>
                <StyledButton>
                  <Google />
                </StyledButton>

                <StyledButton>
                  <Facebook />
                </StyledButton>
              </ButtonContainer>

              <H3>
                Already have an account? <span>Sign In</span>
              </H3>
            </ChildTwo>
          </ParentDiv>
        </CardDiv>
      </FormContainer>
    </div>
  );
}

export default App;
