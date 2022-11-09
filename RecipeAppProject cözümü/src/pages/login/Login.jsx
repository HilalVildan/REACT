import React, { useState } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";

import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();

  let navigate = useNavigate();

  const backendeYolla = (e) => {
    e.preventDefault();
    //  fake backend yaptigim icinn ilk etapta elimle name ve pass belirledim. 
    localStorage.setItem("kullanici", JSON.stringify(name))
    localStorage.setItem("kullanicipass", JSON.stringify(pass))

    navigate("/home");
  };

  return (
    <LoginContainer>
      <FormContainer onSubmit={backendeYolla}>
        <StyledImg src={mealSvg} />
        <Header> {"<Clarusway/>"} recipe</Header>
        <StyledForm>
          <StyledInput placeholder="username" type="text" required onChange={(e)=>setName(e.target.value)} />
          <StyledInput placeholder="password" type="password" required onChange={(e)=>setPass(e.target.value)}/>
          <StyledButton type="submit">login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
