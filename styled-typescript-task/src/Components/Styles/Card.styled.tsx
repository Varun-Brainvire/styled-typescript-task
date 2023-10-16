import styled from "styled-components";
import image from "./illustration-your-users.svg";
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

// import image from "./Components/Styles/illustration-your-users.svg";

export const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 992px) {
    height:100%;
}
`;

export const CardDiv = styled.div`
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 75vh;

  @media only screen and (max-width: 992px) {
    height:100%;
    width: 100%;
    border-radius: 0px;
}
`;

export const ParentDiv = styled.div`
  width: 1000px;
  height: 75vh;
  display: flex;

  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
}
`;

export const ChildOne = styled.div`
  width: 550px;
  height: 75vh;
  background: #cfd9f1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 0px 0px 20px;

  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
}
`;
export const Image = styled.img`
  /* display: flex; */
  /* justify-content: center; */
  width: 700px;
  height: 70vh;

  @media only screen and (max-width: 992px) {
    width: 100%;
    /* height: 100%; */

}
`;

export const ChildTwo = styled.div`
  width: 600px;
  height: 75vh;
  /* background-color: #020816; */
  border-radius: 0px 20px 20px 0px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */

  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
}
`;

export const H1 = styled.h1`
  color: blue;
  font-size: 40px;
  margin-bottom: 5px;
`;

export const H4 = styled.h4`
  color: grey;
  font-size: 12px;
  margin: 0px;
`;
export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 10px;
  border: none;
  outline: none;
  padding-left: 12px;
`;

export const Icon = styled(FaUserAlt)`
  color: #2b5ed5;
  margin-left: 13px;
`;

export const Icon2 = styled(FaMobileAlt)`
  color: #2b5ed5;
  margin-left: 13px;
`;

export const Icon3 = styled(FaKey)`
  color: #2b5ed5;
  margin-left: 13px;
`;

export const Google = styled(FaGoogle)`
  color: #2b5ed5;
  margin-left: 13px;
`;

export const Facebook = styled(FaFacebook)`
  color: #2b5ed5;
  margin-left: 13px;
`;

export const Button = styled.button`
  width: 258px;
  margin-top: 0px;
  height: 39px;
  color: white;
  background-color: blue;
  border-radius: 10px;
  font-size: 15px;

  @media only screen and (max-width: 992px) {
    /* width: 100%; */
    /* height: 100%; */

}
`;

export const H3 = styled.h3`
  font-size: 13px;
  color: grey;

  span {
    color: blue;
  }
`;

export const Signin = styled.h3`
  color: blue;
  font-size: 13px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(191, 195, 196);
  margin-bottom: 15px;
  border-radius: 6px;
`;

export const DivContainer = styled.div`
  padding: 30px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 992px) {
    flex-direction: column;

}
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin-right: 10px;
  min-height: 3rem;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: 200px;
  padding: 10px;

  @media only screen and (max-width: 992px) {
    margin-bottom:5px;

}

  :hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  :active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`



// export const Input = styled.input`
//   width: 100%;
//   height: 36px;
//   padding-left: 12px;
//   font-size: 14px;
//   font-weight: normal;
//   border: none;
//   transition: border-color 150ms ease-in-out 0s;
//   outline: none;
//   color: rgb(33, 49, 60);
//   background-color: rgb(255, 255, 255);
//   /* border:1px solid black; */

//   :hover {
//     box-shadow: rgb(231 238 236) 0px 0px 0px 3px;
//   }
// `;

// export const Icon = styled(FiSearch)`
//   color: red;
//   margin-left: 13px;
// `;

// export const InputContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid rgb(191, 195, 196);
//   margin-bottom: 10px;
//   border-radius: 6px;
// `;

// export const InputDiv = styled.div`

//    padding: 20px;

// `
