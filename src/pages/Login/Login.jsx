import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyle'
import mealSvg from '../../assets/meal2.svg'
import { useNavigate } from 'react-router-dom'

const Login = ({isAuth, setIsAuth}) => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate('/')
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} alt="meal" />
        <Header>Kenan's Recipe</Header>
        <StyledForm onSubmit={submitHandler}>
          <StyledInput type={'text'} placeholder="Username" required />
          <StyledInput type={'password'} placeholder="Password" required />
          <StyledButton>LOGIN</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login