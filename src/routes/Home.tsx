// import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import learnToLearn from '../assets/learnToLearn-logo.svg'
import LandingPageStyles, { Container, Nav, Logo, Links, StyledLink, Button, ButtonLogin, ButtonSignin } from '../styles/LandingPageStyles';

const Login = () => {
  return (
    <LandingPageStyles backgroundColor="#2F2F2F" backgroundImage="none">
      <Container>
        <Nav>
          <Logo><img src={learnToLearn} alt="logo" /></Logo>
          <Links>
            <StyledLink><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></StyledLink>
            <StyledLink><NavLink to="/features" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Features</NavLink></StyledLink>
            <StyledLink><NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Princing</NavLink></StyledLink>
            <StyledLink><NavLink to="/class" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Class</NavLink></StyledLink>
            <StyledLink><NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About Us</NavLink></StyledLink>
          </Links>
          <Button>
            <ButtonLogin><Link to="/login" style={{ color: '#2F2F2F' }}>Log In</Link></ButtonLogin>
            <ButtonSignin><Link to="/cadastre-se" style={{ color: '#01FE84' }}>Sign In</Link></ButtonSignin>
          </Button>
        </Nav>
      </Container>
    </LandingPageStyles>
  );
};

export default Login;
