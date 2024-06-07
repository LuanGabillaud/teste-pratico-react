import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import learnToLearn from '../assets/learnToLearn-logo.svg';
import LandingPageStyles, 
{ 
    Container, 
    Nav, 
    Logo, 
    Links, 
    StyledLink, 
    Button, 
    ButtonLogin, 
    ButtonSignin, 
    Footer, 
    InfoFooter, 
    InputContainer, 
    InputFooter, 
    ButtonFooter
} from '../styles/LandingPageStyles';

type LayoutProps = {
  children: React.ReactNode;
}

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LandingPageStyles backgroundColor="#101310" backgroundImage="none">
      <Container>
        <Nav>
          <Logo><img src={learnToLearn} alt="logo" /></Logo>
          <Links>
            <StyledLink><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></StyledLink>
            <StyledLink><NavLink to="/features" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Features</NavLink></StyledLink>
            <StyledLink><NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Pricing</NavLink></StyledLink>
            <StyledLink><NavLink to="/class" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Class</NavLink></StyledLink>
            <StyledLink><NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About Us</NavLink></StyledLink>
          </Links>
          <Button>
            <ButtonLogin><Link to="/login" style={{ color: '#2F2F2F' }}>Log In</Link></ButtonLogin>
            <ButtonSignin><Link to="/cadastre-se" style={{ color: '#01FE84' }}>Sign In</Link></ButtonSignin>
          </Button>
        </Nav>
        <main>
          {children}
        </main>
        <Footer>
        <Logo><img src={learnToLearn} alt="logo" /></Logo>
          <Links>
            <StyledLink><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></StyledLink>
            <StyledLink><NavLink to="/features" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Features</NavLink></StyledLink>
            <StyledLink><NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Pricing</NavLink></StyledLink>
            <StyledLink><NavLink to="/class" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Class</NavLink></StyledLink>
            <StyledLink><NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About Us</NavLink></StyledLink>
          </Links>
          <InfoFooter>
            <InputContainer>
              <InputFooter placeholder="Seu e-mail"/>
              <ButtonFooter>Subscribe</ButtonFooter>
            </InputContainer>
            <p>© 2024 Lerntolern. All right reserved</p>
          </InfoFooter>          
        </Footer>
      </Container>
    </LandingPageStyles>
  );
};

export default PageLayout;
